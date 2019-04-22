const express = require('express');
const youTubeService = require('./services/YouTubeService');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

let ytService = new youTubeService();

ytService.getResponse();
