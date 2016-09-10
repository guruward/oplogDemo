'use strict';

// Development specific configuration
// ==================================
module.exports = {
  algolia: {
    index: 'callcenter'
  },
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB,
    oplogUri: process.env.OPLOG,
    domain: process.env.DOMAIN
  }
}