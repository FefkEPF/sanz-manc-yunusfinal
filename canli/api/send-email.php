<?php
// ============================================
// Şanzımancı Yunus - PHP Mail API
// DirectAdmin Shared Hosting için
// ============================================

// CORS ve JSON header
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// OPTIONS preflight isteğini karşıla
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Sadece POST kabul et
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Sadece POST istekleri kabul edilir.']);
    exit;
}

// JSON body'yi oku
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Geçersiz istek verisi.']);
    exit;
}

// Form verilerini al
$name    = isset($input['name'])    ? htmlspecialchars(strip_tags(trim($input['name'])))    : '';
$phone   = isset($input['phone'])   ? htmlspecialchars(strip_tags(trim($input['phone'])))   : '';
$brand   = isset($input['brand'])   ? htmlspecialchars(strip_tags(trim($input['brand'])))   : '';
$model   = isset($input['model'])   ? htmlspecialchars(strip_tags(trim($input['model'])))   : 'Belirtilmedi';
$message = isset($input['message']) ? htmlspecialchars(strip_tags(trim($input['message']))) : 'Açıklama belirtilmedi.';

// Zorunlu alanları kontrol et
if (empty($name) || empty($phone) || empty($brand)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Lütfen zorunlu alanları doldurun (Ad, Telefon, Marka).']);
    exit;
}

// ============================================
// SMTP Ayarları (DirectAdmin)
// ============================================
$smtp_host = 'mail.sanzimanciyunus.com';
$smtp_port = 587;
$smtp_user = 'info@sanzimanciyunus.com';
$smtp_pass = '-+sanziman3434';
$to_email  = 'info@sanzimanciyunus.com';

// ============================================
// E-posta İçeriği (HTML)
// ============================================
$subject = "Yeni Hızlı Ekspertiz Talebi - $brand $model";

$html_body = "
<div style='font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;'>
  <h2 style='color: #ea2624; border-bottom: 2px solid #ea2624; padding-bottom: 10px; margin-top: 0;'>Yeni Teklif Talebi Bilgileri</h2>
  <table style='width: 100%; border-collapse: collapse; margin-top: 15px;'>
    <tr>
      <td style='padding: 8px 0; font-weight: bold; width: 150px; border-bottom: 1px solid #f5f5f5;'>Müşteri Adı:</td>
      <td style='padding: 8px 0; border-bottom: 1px solid #f5f5f5;'>$name</td>
    </tr>
    <tr>
      <td style='padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5;'>Telefon:</td>
      <td style='padding: 8px 0; border-bottom: 1px solid #f5f5f5;'><a href='tel:$phone' style='color: #ea2624; text-decoration: none;'>$phone</a></td>
    </tr>
    <tr>
      <td style='padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5;'>Araç Markası:</td>
      <td style='padding: 8px 0; border-bottom: 1px solid #f5f5f5;'>$brand</td>
    </tr>
    <tr>
      <td style='padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5;'>Model / Yıl:</td>
      <td style='padding: 8px 0; border-bottom: 1px solid #f5f5f5;'>$model</td>
    </tr>
  </table>
  <div style='margin-top: 20px;'>
    <h3 style='margin-bottom: 10px; color: #555;'>Şikayet / Arıza Açıklaması</h3>
    <div style='background: #f9f9f9; padding: 15px; border-left: 4px solid #ea2624; border-radius: 4px; font-style: italic; white-space: pre-wrap;'>$message</div>
  </div>
  <div style='margin-top: 20px; padding: 10px; background: #f0f0f0; border-radius: 6px; font-size: 12px; color: #888;'>
    Bu e-posta sanzimanciyunus.com web sitesindeki Hızlı Ekspertiz Formu aracılığıyla otomatik olarak gönderilmiştir.
  </div>
</div>
";

// ============================================
// SMTP Soket Gönderim Fonksiyonu
// (DirectAdmin ve Shared Hosting için Kimlik Doğrulamalı)
// ============================================
function send_smtp_email($to, $subject, $html_body, $smtp_host, $smtp_port, $smtp_user, $smtp_pass, $from_name) {
    $protocol = ($smtp_port == 465) ? 'ssl://' : '';
    $socket = @fsockopen($protocol . $smtp_host, $smtp_port, $errno, $errstr, 15);
    
    if (!$socket) {
        // Yedek port denemesi
        $fallback_port = ($smtp_port == 465) ? 587 : 465;
        $protocol = ($fallback_port == 465) ? 'ssl://' : '';
        $socket = @fsockopen($protocol . $smtp_host, $fallback_port, $errno, $errstr, 15);
        if (!$socket) {
            return ['success' => false, 'error' => "SMTP baglanti hatasi: $errstr ($errno)"];
        }
        $smtp_port = $fallback_port;
    }

    $read = function($socket, $expected) {
        $response = "";
        while ($str = fgets($socket, 515)) {
            $response .= $str;
            if (substr($str, 3, 1) == " ") {
                break;
            }
        }
        $code = substr($response, 0, 3);
        if ($code != $expected) {
            throw new Exception("SMTP hatasi: $response (Beklenen: $expected)");
        }
        return $response;
    };

    try {
        $read($socket, "220");
        
        $server_name = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'localhost';
        fwrite($socket, "EHLO $server_name\r\n");
        $ehlo_resp = $read($socket, "250");

        // 587 ve STARTTLS uyumluluğu
        if ($smtp_port == 587 && strpos($ehlo_resp, 'STARTTLS') !== false) {
            fwrite($socket, "STARTTLS\r\n");
            $read($socket, "220");
            
            $crypto_method = STREAM_CRYPTO_METHOD_TLS_CLIENT;
            if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
                $crypto_method |= STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
            }
            if (defined('STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT')) {
                $crypto_method |= STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT;
            }
            
            if (!stream_socket_enable_crypto($socket, true, $crypto_method)) {
                throw new Exception("STARTTLS baslatilamadi");
            }
            
            fwrite($socket, "EHLO $server_name\r\n");
            $read($socket, "250");
        }

        fwrite($socket, "AUTH LOGIN\r\n");
        $read($socket, "334");

        fwrite($socket, base64_encode($smtp_user) . "\r\n");
        $read($socket, "334");

        fwrite($socket, base64_encode($smtp_pass) . "\r\n");
        $read($socket, "235");

        fwrite($socket, "MAIL FROM: <$smtp_user>\r\n");
        $read($socket, "250");

        fwrite($socket, "RCPT TO: <$to>\r\n");
        $read($socket, "250");

        fwrite($socket, "DATA\r\n");
        $read($socket, "354");

        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "From: =?UTF-8?B?" . base64_encode($from_name) . "?= <$smtp_user>\r\n";
        $headers .= "Reply-To: $smtp_user\r\n";
        $headers .= "To: <$to>\r\n";
        $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
        $headers .= "Date: " . date('r') . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

        fwrite($socket, $headers . "\r\n" . $html_body . "\r\n.\r\n");
        $read($socket, "250");

        fwrite($socket, "QUIT\r\n");
        fclose($socket);
        return ['success' => true];
    } catch (Exception $e) {
        @fwrite($socket, "QUIT\r\n");
        @fclose($socket);
        return ['success' => false, 'error' => $e->getMessage()];
    }
}

// Gönderim
$smtp_result = send_smtp_email($to_email, $subject, $html_body, $smtp_host, $smtp_port, $smtp_user, $smtp_pass, "$name - Hızlı Teklif");

if ($smtp_result['success']) {
    echo json_encode(['success' => true, 'message' => 'Teklif talebiniz başarıyla iletildi.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'E-posta gönderilemedi.', 'error' => $smtp_result['error']]);
}
?>
