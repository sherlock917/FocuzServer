var express = require('express')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , pageController = require('./controllers/page_controller')
  , userController = require('./controllers/user_controller')
  , recordController = require('./controllers/record_controller')
  , app = express()

var port = 3210

mongoose.connect('mongodb://localhost/Focuz')

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'))

app.get('/', pageController.index)

app.post('/signin', userController.signin)
app.post('/signup', userController.signup)

app.post('/save', recordController.save)
app.get('/list/:userId', recordController.list)

app.listen(port, function () {
  console.log('server listening on port ' + port)
})