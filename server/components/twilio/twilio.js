const express = require('express');
const router = express.Router();

const getVideoTokenController = require('./controllers/getVideoToken.server.controller.js');

router.get('/get-video-token', getVideoTokenController);

module.exports = router;
