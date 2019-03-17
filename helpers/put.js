const db = require('../models')

exports.questionById = (req, res) => {
    db.Question.findByIdAndUpdate(req.params.qnId, req.body, (err, question) => {
        if(err) res.send(err)
        else res.send(question)
    })
}

exports.answerById = (req, res) => {
    db.Answer.findByIdAndUpdate(req.params.ansId, req.body, (err, answer) => {
        if(err) res.send(err)
        else res.send(answer)
    })
}
