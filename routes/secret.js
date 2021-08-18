const express = require('express');
const router = express.Router();
const secretHandlers = require('../handlers/secret');


// 读取所有秘密
router.get('/all', (req, res, next) => {
  secretHandlers.getAll(req, res, next);
});

// 新增一个新秘密
router.post('/add', (req, res, next) => {
  secretHandlers.addOne(req, res, next);
});

module.exports = router;