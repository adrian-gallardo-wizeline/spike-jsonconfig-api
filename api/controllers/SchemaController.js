/**
 * SchemaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  async fetchSchemaHierarchy(req, res) {
    const schemaId = req.param('schemaId')

    const schema = await Schema.findOne(schemaId).populate('composedFragments')
    await fetchParentSchemaRecursively(schema)

    res.status(200).json(schema)
  }

}

async function fetchParentSchemaRecursively(schema) {
  const parentSchemaId = schema.parentSchema
  if (!parentSchemaId) {
    return
  }
  schema.parentSchema = await Schema.findOne(parentSchemaId).populate('composedFragments')

  return await fetchParentSchemaRecursively(schema.parentSchema)
}

