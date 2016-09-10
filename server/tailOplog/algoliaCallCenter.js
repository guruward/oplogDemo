'use strict'

var config = require('../../config/environment/index');


module.exports = function(){

  var MongoOplog = require('mongo-oplog');
  var oplogCalls= MongoOplog(config.mongo.oplogUri, { ns: 'test.calls' }).tail();

  var algoliasearch = require('algoliasearch');
  var client =  algoliasearch(config.algolia.applicationId, config.algolia.apiKey)
  var index = client.initIndex(config.algolia.index);

  oplogCalls.on('op', function (data) {
   // console.log(data);
  });

  oplogCalls.on('insert', function (doc) {
    doc.o.objectID = doc.o._id;
    index.addObject(doc.o, function(err,content){
      if(err) {console.error(err) ; return  };
      console.log(content) ;
    })
  });

  oplogCalls.on('update', function (doc) {
    var obj = {};
    if (doc.o['$set']) {
      for (var key in doc.o['$set']) {
        obj[key] = doc.o['$set'][key];
      }
    } else {
      obj = doc.o;
    }
    obj.objectID = doc.o2._id;
    index.partialUpdateObject(obj, function (err, content) {
      if (err) {
        console.error(err);
        return
      }
      ;
      //  console.log(content) ;
    })
  });

  oplogCalls.on('delete', function (doc) {
    index.deleteObject(doc.o._id.toString(), function(err) {
      if (err) {
        console.log(err);
      }
    });

  });

  oplogCalls.on('error', function (error) {
    console.log(error);
  });

  oplogCalls.on('end', function () {
    console.log('Stream ended');
  });

  oplogCalls.stop(function () {
    console.log('server stopped');
  });


}
