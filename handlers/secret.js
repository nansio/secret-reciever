const mysql = require('mysql');
const connection_config = require('../config/mysql');
const express = require('express');
const poolextend = require('../util/poolextend');
const sql = require('../util/sql');
const json = require('../util/json');

const pool = mysql.createPool(poolextend({}, connection_config));

const secretHandlers = {
  getAll: (req, res, next) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return next(err);
      }
      connection.query(sql.getAll, (err, rows) => {
        if (err) {
          return next(err);
        }
        const result = {
          type: 'get',
          data: rows
        }
        json(res, result);
        connection.release();
      });
    })
  },
  addOne: (req, res, next) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return next(err);
      }
      const data = [req.body.name, req.body.story, req.body.create_at]
      connection.query(sql.addOne, data, (err, rows) => {
        if (err) {
          return next(err);
        }
        const result = {
          type: 'add',
          data: rows
        }
        json(res, result);
        connection.release();
      });
    })
  }
}

module.exports = secretHandlers;