import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export interface EmailData {
  name: string;
  phone: string;
  brand: string;
  model?: string;
  message?: string;
}

export async function sendQuoteEmail(data: EmailData) {
  const { name, phone, brand, model, message } = data;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.SMTP_TO;

  if (!host || !user || !pass || !to) {
    throw new Error('SMTP environment variables are not configured. Please check your .env file.');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: `"${name} - Hızlı Teklif" <${user}>`,
    to,
    subject: `Yeni Hızlı Ekspertiz Teklif Talebi - ${brand} ${model || ''}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
        <h2 style="color: #ea2624; border-bottom: 2px solid #ea2624; padding-bottom: 10px; margin-top: 0;">Yeni Teklif Talebi Bilgileri</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 150px; border-bottom: 1px solid #f5f5f5;">Müşteri Adı:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Telefon:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;"><a href="tel:${phone}" style="color: #ea2624; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Araç Markası:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;">${brand}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Model / Yıl:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;">${model || 'Belirtilmedi'}</td>
          </tr>
        </table>
        <div style="margin-top: 20px;">
          <h3 style="margin-bottom: 10px; color: #555;">Şikayet / Arıza Açıklaması</h3>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #ea2624; border-radius: 4px; font-style: italic; white-space: pre-wrap;">${message || 'Açıklama belirtilmedi.'}</div>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}
