const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.route('/')
    .get((req, res) => res.send(`${data}`))
    .post((req, res) => res.send('upload a video'))

module.exports = router;