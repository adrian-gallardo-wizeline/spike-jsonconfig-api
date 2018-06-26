/**
 * Data.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    identifier: { type: 'string' },
    name: { type: 'string' },
    version: { type: 'string' },
    jsonData: { type: 'json', required: true },

    schema: {
      model: 'schema',
    },
    dataFragments: {
      collection: 'dataFragment',
      via: 'datas'
    },
    snapshots: {
      collection: 'configSnapshot',
      via: 'config'
    },
  },

  afterCreate: async (config, proceed) => {
    await createSnapsot(config)
    proceed()
  },
  afterUpdate: async (config, proceed) => {
    await createSnapsot(config)
    proceed()
  }

};

async function createSnapsot(config) {
  const snapshot = {}
  snapshot.config = config.id
  snapshot.jsonData = config.jsonData
  snapshot.version = config.version
  snapshot.changelog = config.changelog

  await ConfigSnapshot.create(snapshot)
}