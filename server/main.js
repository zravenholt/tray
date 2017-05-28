const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const router = require('./routers/router.js');
const { PORT } = require('./config');

const app = express();
const jsonParser = bodyParser.json();

app.use(cors());

app.use(jsonParser);

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}.`)
})


