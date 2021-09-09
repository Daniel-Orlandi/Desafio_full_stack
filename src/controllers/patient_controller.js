const PatientsModel = require("../models/patients");
//Framework Adonis
class PatientsController {
  async index(req, res) {
    
    const { page = 1, limit = 20 } = req.query;

    const [count] = await PatientsModel.count();

    const patients = await PatientsModel.getPatients(page, limit);

    res.header("X-Total-Count", count["count(*)"]);

    return res.status(201).json(patients);
  }

  async show(req, res) {
    const { id } = req.params;

    const patient = await PatientsModel.getPatientById(id);

    return res.status(201).json(patient);
  }

  async store(req, res) {
    const { name, email, phone } = req.body;

    const patient = await PatientsModel.create(name, email, phone);

    return res.status(201).json(patient);
  }

  async update(req, res) {
    const { name, email, phone } = req.body;

    const { id } = req.params;

    const patient = await PatientsModel.update(id, name, email, phone);

    return res.status(201).json(patient);
  }

  async delete(req, res) {
    const { id } = req.params;

    await PatientsModel.delete(id);
    return res.status(204).send();
  }
}

module.exports = new PatientsController();
