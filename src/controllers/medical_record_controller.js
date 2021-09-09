const MedicalRecordModel = require("../models/medicalrecord");

//Framework Adonis
class MedicalRecordController {
  async index(req, res) {
    
    const { page = 1, limit = 20 } = req.query;

    const [count] = await MedicalRecordModel.count();

    const medical_records = await MedicalRecordModel.getMedicalRecords(page, limit);

    res.header("X-Total-Count", count["count(*)"]);

    return res.status(201).json(medical_records);
  }

  async show(req, res) {
    const { id } = req.params;

    const medical_record = await AdsModel.getMedicalRecordById(id);

    return res.status(201).json(medical_record);
  }

  async store(req, res) {
    const { name, description, value, publishing_date, user_id, status, condition } = req.body;

    const medical_record = await MedicalRecordModel.create(name, description, value, publishing_date, user_id, status, condition);

    return res.status(201).json(medical_record);
  }

  async update(req, res) {
    const { name, description, value, publishing_date, user_id, status, condition } = req.body;

    const { id } = req.params;

    const medical_record = await MedicalRecordModel.update(id, name, description, value, publishing_date, user_id, status, condition);

    return res.status(201).json(medical_record);
  }

  async delete(req, res) {
    const { id } = req.params;

    await MedicalRecordModel.delete(id);
    return res.status(204).send();
  }
}

module.exports = new MedicalRecordController();
