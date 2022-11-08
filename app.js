let express = require('express')
let app = express()
let foks = require('./foks');

app.use('/foks', foks);


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', function (req, res) {
  res.send('about');
});

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.use('/static', express.static('public'))

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!')
})

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

app.get('/user/:id', function (req, res, next) {
  res.render('special')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})