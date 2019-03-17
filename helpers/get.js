const db = require('../models')

exports.questions = (req, res) => {
    db.Question.find({}, (err, questions) => {
        if(err) res.send(err)
        res.send(questions)
    })
}

exports.questionById = (req, res) => {
    db.Question.findById(req.params.id)
        .populate('qnAnswers')
        .exec((err, question) => {
            if(err) res.send(err)
            res.send(question)
    })
}

exports.answerById = (req, res) => {
    db.Answer.findById(req.params.id, (err, answer) => {
            if(err) res.send(err)
            res.send(answer)
    })
}