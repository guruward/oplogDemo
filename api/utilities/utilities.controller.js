/**
 * Created by stephenward on 5/11/16.
 */
var _ = require('lodash');
var async = require('async');
var Calls = require('../../models/call.model.js');
var config = require('../../config/environment');

var algoliasearch = require('algoliasearch');
var client = algoliasearch(config.algolia.applicationId, config.algolia.apiKey);

exports.getStatus = function (req, res) {

    res.json();
}

