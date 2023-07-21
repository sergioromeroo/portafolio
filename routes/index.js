var express = require('express');
var router = express.Router();

const {index,index2,topbar,minibar} = require('../controllers/indexcontroller')


/* GET home page. */
router.get('/', index)
router.get('/index2', index2)
router.get('/topbar', topbar)
router.get('/minibar', minibar)

module.exports = router;
