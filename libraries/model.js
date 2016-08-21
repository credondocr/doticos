class Model {

  constructor(SchemaModel) {
    this.SchemaModel = SchemaModel;
  }

  create(input) {
    const newSchemaModel = new this.SchemaModel(input);
    return newSchemaModel.saveAsync();
  }

  upsert(query, updatedModel){
    return this.SchemaModel
      .findByIdAndUpdate(query, updatedModel, { upsert: true })
      .execAsync();
  }

  update(id, updatedModel) {
    return this.SchemaModel
      .findByIdAndUpdate(id, updatedModel, { new: true })
      .execAsync();
  }

  find(query) {
    return this.SchemaModel
      .find(query)
      .execAsync();
  }

  findAndSort(query){
    return this.SchemaModel
      .find(query)
      .sort({wins_count: -1})
      .execAsync();
  }

  findOne(query, populate) {
    return this.SchemaModel
      .findOne(query)
      .populate(populate || '')
      .execAsync();
  }

  findById(id, populate) {
    return this.SchemaModel
      .findById(id)
      .populate(populate || '')
      .execAsync();
  }

  remove(id) {
    return this.SchemaModel
      .findByIdAndRemove(id)
      .execAsync();
  }
}

module.exports = Model;
