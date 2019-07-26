const express = require('express');
const path = require('path');
const app = express();

// serve static
app.use(express.static(__dirname + '/dist/pairs-test-angular'));

// redirect everything to the index
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/pairs-test-angular/index.html'));
});

// run the server
app.listen(process.env.PORT || 3000);
