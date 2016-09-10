'use strict';

var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var  CallSchema = new Schema({
  
  name: {type: String},
  company:{type: String},
  description: {type: String},
  solution:{type: String},
  severity:{type:String},
  assignedTo:{type:String},
  contact:{name:{type:String},phone:{type:String}}
  
  
});

CallSchema.plugin(timestamps);

module.exports = mongoose.model('Call', CallSchema);
