const {getData, createData} = require('./../controllers/user.controller')
const express = require('express');
const user = express.Router();

user.get('/', getData)
user.post('/', createData)

module.exports = user;
