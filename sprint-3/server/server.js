const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const data = require('./data.json');

const videoRoutes = require('./routes/videos');

app.use(bodyParser.json())

app.use((req, res, next)=> {
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
      res.status(400).send('Server requires application/json');
    } else {
      next();
    }
  });

app.use('/videos', videoRoutes)


app.listen(port, () => console.log(`Running on ${port}`))