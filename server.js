var express = require('express')
var app = express()

app.use(express.static(__dirname))

var messages = [
    {name: 'Tim', message 'Good day!'},
    {name: 'Jane', message 'Greetings'}
]

app.get('/messages', (req, res) => {
    res.send(messages)
})


var server = app.listen(3000, () => {
    console.log('Server is listening on port', server.address().port)
})