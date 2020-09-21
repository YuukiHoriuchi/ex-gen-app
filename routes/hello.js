var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  var data ={
      title : 'Hello!',
      content:'これはサンプルのコンテンツです'
  };
  res.render('hello',data);
});

module.exports = router;
