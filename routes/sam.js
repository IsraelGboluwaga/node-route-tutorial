const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.render('sam', {iway: 'road network'})
});

module.exports = router;