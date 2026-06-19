import express from 'express';
import cors from 'cors';
import path from 'path';
import { sendQuoteEmail } from './server/emailSender';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, phone, brand, model, message } = req.body;

    if (!name || !phone || !brand) {
      return res.status(400).json({ success: false, message: 'Lütfen zorunlu alanları doldurun.' });
    }

    await sendQuoteEmail({ name, phone, brand, model, message });
    res.status(200).json({ success: true, message: 'Teklif talebiniz başarıyla iletildi.' });
  } catch (error: any) {
    console.error('Email sending failed:', error);
    res.status(500).json({ success: false, message: 'E-posta gönderilemedi.', error: error.message });
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production' || process.env.SERVE_STATIC === 'true') {
  const distPath = path.join(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
