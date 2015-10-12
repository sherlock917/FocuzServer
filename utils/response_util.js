exports.success = function (res, msg, data) {
  res.end(JSON.stringify({
    code : 200,
    msg : msg,
    data : data
  }))
}

exports.error = function (res, msg, data) {
  res.end(JSON.stringify({
    code : 500,
    msg : msg,
    data : data
  }))
}