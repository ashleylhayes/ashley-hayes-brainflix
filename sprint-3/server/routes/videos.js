const express = require('express');
const app = express()
const router = express.Router();
const bodyParser = require('body-parser')
const data = require('../data.json');

app.use(bodyParser.json())

router.route('/')
    .get((_req, res) => {
        res.json(data)
    })
    .post((req, res) => res.send('upload a video'))

module.exports = router;