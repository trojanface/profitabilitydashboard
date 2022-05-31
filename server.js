const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'client/')));
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.sendFile(path.join(__dirname,'/client/index.html'))
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log(`Example app listening at http://${host}:${port}`, host, port)
})