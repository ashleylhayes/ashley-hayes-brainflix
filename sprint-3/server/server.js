const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const data = require('./data.json');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());


app.get('/videos', (_req, res) => {
  res.json(data)
})

app.get('/videos/:id', (req, res) => {
  const videoID = req.params.id;
  if (data.some(dataVideo => dataVideo.id === videoID)) {
      res.json(data.find(dataVideo => dataVideo.id === videoID));
  }
})

  app.post('/videos', (req, _res) => {
    data.push(req.body)
  })

app.use((req, res, next)=> {
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
      res.status(400).send('Server requires application/json');
    } else {
      next();
    }
});

app.listen(port, () => console.log(`Running on ${port}`))