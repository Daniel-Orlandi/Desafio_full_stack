const connection = require("../databases/connection");

class PatientPhotoModel {
  async getPatientPhoto(page, limit) {
    return connection("patient_photos")
      .limit(limit)
      .offset((page - 1) * limit)
      .select("*");
  }

  async count() {
    return connection("patient_photos").count();
  }

  async getPatientPhotoById(id) {
    return connection("patient_photos").where("id", id).select("*");
  }

  async create(patient_id, file_id) {
    return connection("patient_photos").returning("*").insert({
      patient_id,
      file_id
    });
  }

  async update(id, patient_id, file_id) {
    return connection("patient_photos")
    .returning("*")
    .update({ patient_id, file_id })
    .where("id", id);
  }

  async delete(id) {
    return connection("patient_photos").where("id", id).delete();
  }
}

module.exports = new PatientPhotoModel();
