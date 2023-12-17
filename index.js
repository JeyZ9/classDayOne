const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer  = require('multer');
const cors = require('cors');
const app = express();
const upload = multer();
const port = 3000;

app.use(cors({maxAge: 86400}));
app.use(bodyParser.json());

app.get('/', (req, res) => {

  const fnc = () => {
    throw new Error('Test Error');
  }
  fnc();

  res.send('Hello World!');
});

require('./src/controllers/routes')(app, upload);

app.use(require('./src/middlewares/error.handler'));

mongoose.connect('mongodb://localhost:27017/rapidclass').then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});