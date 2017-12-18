/**
 * Conscious server
 */

const express = require('express');
const app = express();

app.get('/food', function(req, res) {
  res.send('Heck ya, here');
})

app.listen(3001);