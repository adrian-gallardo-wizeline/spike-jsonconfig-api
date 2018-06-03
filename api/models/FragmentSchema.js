/**
 * FragmentSchema.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    version: { type: 'string' },
    jsonSchema: { type: 'json', required: true },
    baseProp: { type: 'string' },

    composedSchemas: {
      collection: 'schema',
      via: 'composedFragments',
    },
    dataFragments: {
      collection: 'dataFragment',
      via: 'fragmentSchema',
    },
  },

};

