var Record = require('../models/Record')
  , ResponseUtil = require('../utils/response_util')

exports.save = function (req, res) {
  var record = new Record(req.body)
  record.save(function (err) {
    if (err) {
      ResponseUtil.error(res, 'INTERNAL SERVER ERROR')
    } else {
      ResponseUtil.success(res, 'SUCCESSFULLY SAVED RECORD')
    }
  })
}

exports.list = function (req, res) {
  Record.find({userId : req.params.userId}, function (err, data) {
    if (err) {
      ResponseUtil.error(res, 'INTERNAL SERVER ERROR')
    } else {
      ResponseUtil.success(res, 'OK', data)
    }
  })
}