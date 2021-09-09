const connection = require("../databases/connection");

class PatientsModel {
  async getPatients(page, limit) {
    return connection("patients")
      .limit(limit)
      .offset((page - 1) * limit)
      .select("*");
  }

  async count() {
    return connection("patients").count();
  }

  async getPatientById(id) {
    return connection("patients").where("id", id).select("*");
  }

  async create(name,email, phone) {
    return connection("patients").returning("*").insert({
      name,
      email,     
      phone
    });
  }

  async update(id, name,email, phone) {
    return connection("patients")
      .returning("*")
      .update({ name, email, phone })
      .where("id", id);
  }

  async delete(id) {
    return connection("patients").where("id", id).delete();
  }
}

module.exports = new PatientsModel();
