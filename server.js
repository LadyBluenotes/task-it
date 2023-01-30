const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./api/routes/taskItRoutes'))

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

app.get('/', (req, res) => {
    res.send('Welcome to Task It API');
  });  

app.listen(PORT, () => {
    console.log(`Task It is running on port ${PORT}`);
});
