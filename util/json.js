const json = function (response, result) {
  if (typeof(result) === 'undefined') {
    response.json({
      code: '-1',
      msg: 'operation failed'
    })
  }
  else if (result.type === 'add') {
    response.json({
      code: '200',
      success: true,
      msg: 'add success'
    })
  }
  else if (result.type === 'get') {
    response.json({
      code: '200',
      success: true,
      msg: 'get all success',
      data: result.data
    })
  }
}

module.exports = json