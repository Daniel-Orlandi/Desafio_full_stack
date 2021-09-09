const connection = require("../databases/connection");

class MedicalRecordModel {
  async getMedicalRecords(page, limit) {
    return connection("medical_record")
      .limit(limit)
      .offset((page - 1) * limit)
      .select("*");
  }

  async count() {
    return connection("medical_record").count();
  }

  async getMedicalRecordById(id) {
    return connection("medical_record").where("id", id).select("*");
  }

  async create(name, description, value, publishing_date, user_id, status, condition) {
    return connection("medical_record")
    .returning("*")
    .insert({
      name,
      description,
      value,
      publishing_date,
      user_id,
      status,
      condition
    });
  }

  async update(id, name, description, value, publishing_date, user_id, status, condition) {
    return connection("medical_record")
      .returning("*")
      .update({
        name,
        description,
        value,
        publishing_date,
        user_id,
        status,
        condition
      })
      .where("id", id);
  }

  async delete(id) {
    return connection("medical_record").where("id", id).delete();
  }
}

module.exports = new MedicalRecordModel();
