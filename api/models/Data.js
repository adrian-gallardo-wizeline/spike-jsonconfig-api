/**
 * Data.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string' },
    version: { type: 'string' },
    jsonData: { type: 'json', required: true },

    schema: {
      model: 'schema',
    },
    dataFragments: {
      collection: 'dataFragment',
      via: 'datas'
    }
  },

};

