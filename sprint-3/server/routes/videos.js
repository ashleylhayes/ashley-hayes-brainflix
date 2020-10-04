const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const data = require('../data.json');

app.use(bodyParser.json())

// const videoList = [
//     ...data,
//     {
//         id: id,
//         title: title,
//         channel: channel,
//         image: image
//     }
// ]
// console.log(videoList)

router.route('/')
    .get((_req, res) => {
        res.json(data)
    })
    .post((req, res) => {
        res.send('upload a video')
    })

router.get('/:id', (req, res) => {
    const videoID = req.params.id;
    if (data.some(dataVideo => dataVideo.id === videoID)) {
        res.json(data.find(dataVideo => dataVideo.id === videoID));
    }
    else res.status(404).send("Error: Not Found");
});
    

module.exports = router;