const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
const upload = multer({storage: storage});

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/upload-image', upload.single('file'), async (req, res) => {
  try {
    const imageData = req.body.image; 

    const pinataApiKey = 'e3b3c4da41b644547eb7'; 
    const pinataSecretApiKey = '44d9ac5ac32f0040793cf2934965b00d9ef471b270ef57a9ca08db83b8ce2e08'; 

    const data = new FormData();
    data.append('file', fs.createReadStream('./uploads/' + req.file.filename));

    const pinataResponse = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', data, {
      maxContentLength: 'Infinity',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        'pinata_api_key': pinataApiKey,
        'pinata_secret_api_key': pinataSecretApiKey,
      },
    });

    console.log(pinataResponse.data);

    res.status(200).json({ success: true, pinataResponse: pinataResponse.data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});