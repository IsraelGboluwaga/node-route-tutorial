const express =require('express');
const router = express.Router();

router.get('/', function(req, res){
    return res.render('gee', {Anything: "Can be anything"})
});
module.exports= router;
