var express = require('express')
var app = express()

app.listen(8081);

app.get('/', function (req, res) {
    res.send('Get request')
})

app.post('/', function (req, res) {
    res.send('Post request')
})

