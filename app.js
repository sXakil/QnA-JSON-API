const express   = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    GET         = require('./helpers/get'),
    POST        = require('./helpers/post'),
    PUT         = require('./helpers/put'),
    DELETE      = require('./helpers/delete')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/views'))
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*')
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.append('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
})

/** temporary form for testing */
app.get('/', (req, res) => {
    res.render('form')
})

/** get all questions */
app.get('/qn', GET.questions)

/** get questions by id */
app.get('/qn/:id', GET.questionById)

/** get answers by id */
app.get('/ans/:id', GET.answerById)

/** post new question */
app.post('/', POST.newQuestion)

/** post new answer */
app.post('/qn/:id', POST.newAnswer)

/** listen to port 3000 */
app.listen(3000, 'localhost', () => {})
