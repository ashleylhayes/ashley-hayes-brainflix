const express = require('express');
const router = express.Router();

router.get('/videos/:id', (req, res) => {
    console.log('the video is: ', req.params.id);
    const videoID = req.params.id;
    res.send(videoID);
})

module.exports = router;