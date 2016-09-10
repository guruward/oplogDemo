/**
 * Created by stephenward on 5/11/16.
 */
'use strict' ;

module.exports = function(app){
  
  app.use('/api/utilities', require('./api/utilities'));
  app.route('/*')
    .get(function(req, res) {
      res.sendFile( 'index.html',{root: app.get('appPath')});
    });
};
