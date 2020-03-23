var express = require('express');
var router = express.Router();

/*
 * Example of a GET request.
 * TODO: remove this code once everyone is familiar with it.
 */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
