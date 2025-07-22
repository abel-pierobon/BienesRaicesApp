// backend/cloudinaryDelete.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;

const app = express();
app.use(cors());
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.post('/api/delete-image', async (req, res) => {
  const { public_id } = req.body;
  if (!public_id) {
    return res.status(400).json({ success: false, error: 'public_id requerido' });
  }
  try {
    await cloudinary.uploader.destroy(public_id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Cloudinary delete API running on port ${PORT}`);
}); 