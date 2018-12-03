/*
* 模型对象
* */
const mongoose = require('mongoose');

const usersShema = new mongoose.Schema({

});
module.exports = mongoose.model('users',usersShema)
