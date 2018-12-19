const express = require('express');
const server = express();
server.set('x-powered-by', false);
server.get('/', function (req, res) {
 res.header('XSS' , '"<script>alert(123);</script>' );
 res.send('');
});
server.listen(14, function () {
  console.log('En el puerto 14');
});