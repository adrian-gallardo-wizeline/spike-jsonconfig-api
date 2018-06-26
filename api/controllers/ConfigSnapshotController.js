/**
 * DataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const semver = require('semver')

module.exports = {

  async fetchConfiguration(req, res) {
    const configIdentifier = req.param('configIdentifier')
    const version = req.param('v')
    const config = await Data.findOne({ identifier: configIdentifier })

    if (!config) {
      return res.status(404, 'Not Found')
    }

    const snapshots = await ConfigSnapshot.find({
      where: {
        config: config.id
      },
      sort: 'id DESC'
    }) || []

    if (!snapshots || snapshots.length === 0) {
      return res.status(404, 'Not Found')
    }

    if (!version) {
      res.status(200).json(snapshots[0])  
    } else {
      const snapshot = snapshots.find(currentSnapshot => semver.satisfies(currentSnapshot.version, version))
      res.status(200).json(snapshot)
    }
  }
};
