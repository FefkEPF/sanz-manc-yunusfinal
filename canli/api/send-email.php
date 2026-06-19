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
// PHPMailer olmadan SMTP ile gönderim
// (DirectAdmin sunucularda PHP mail() fonksiyonu 
//  zaten sunucunun kendi SMTP'sini kullanır)
// ============================================

// E-posta header'ları
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: \"$name - Hızlı Teklif\" <$smtp_user>\r\n";
$headers .= "Reply-To: $smtp_user\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Gönderim
$sent = mail($to_email, $subject, $html_body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Teklif talebiniz başarıyla iletildi.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin.']);
}
?>
