var express = require('express');
var router = express.Router();

/* index page. */
router.get('/', function(req, res, next) {
  res.render('./main/index', { title: 'index' });
});




module.exports = router;
