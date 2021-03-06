'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RuleSchema = new Schema({
  program: String,
  condition: String,
  value: String,
});

module.exports = mongoose.model('Rule', RuleSchema);
