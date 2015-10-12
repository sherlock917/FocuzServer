var User = require('../models/User')
  , ResponseUtil = require('../utils/response_util')

function checkUser (params, callback) {
  User.find({account : params.account}, function (err, data) {
    if (err) {
      callback(0) // error
    } else if (data.length <= 0) {
      callback(1) // account not found
    } else if (params.password && params.password != data[0].password) {
      callback(2) // wrong password
    }  else {
      callback(3, data[0])
    }
  })
}

exports.signin = function (req, res) {
  checkUser(req.body, function (code, data) {
    switch (code) {
      case 0 : 
        ResponseUtil.error(res, 'INTERNAL SERVER ERROR')
        break
      case 1 : 
        ResponseUtil.error(res, 'ACCOUNT NOT FOUND')
        break
      case 2 :
        ResponseUtil.error(res, 'WRONG PASSWORD')
      default :
        ResponseUtil.success(res, 'SUCCESSFULLY SINGED IN', data)
        break
    }
  })
}

exports.signup = function (req, res) {
  console.log(req)
  checkUser(req.body, function (code) {
    if (code == 1) {
      var user = new User(req.body)
      user.save(function (err) {
        if (err) {
          ResponseUtil.error(res, 'INTERNAL SERVER ERROR')
        } else {
          ResponseUtil.success(res, 'SUCCESSFULLY SIGNED UP', user)
        }
      })
    } else {
      ResponseUtil.error(res, 'ACCOUNT ALREADY EXISTS')
    }
  })
}