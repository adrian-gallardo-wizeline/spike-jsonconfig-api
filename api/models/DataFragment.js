/**
 * DataFragment.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string', required: true },
    version: { type: 'string' },
    jsonData: { type: 'json', required: true },

    fragmentSchema: {
      model: 'fragmentSchema',
    },
    datas: {
      collection: 'data',
      via: 'dataFragments',
    },

  },

};

