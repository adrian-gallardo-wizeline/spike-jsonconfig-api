/**
 * Schema.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    version: { type: 'string' },
    jsonSchema: { type: 'json', required: true },

    parentSchema: {
      model: 'schema',
    },
    childSchemas: {
      collection: 'schema',
      via: 'parentSchema',
    },
    composedFragments: {
      collection: 'fragmentSchema',
      via: 'composedSchemas',
    },
  },
};

