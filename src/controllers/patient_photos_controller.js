const PatientPhotoModel = require("../models/patientphotos");

//Framework Adonis
class PatientPhotosController {
  async index(req, res) {
    
    const { page = 1, limit = 20 } = req.query;

    const [count] = await PatientPhotoModel.count();

    const patientPhotos = await PatientPhotoModel.getPatientPhoto(page, limit);

    res.header("X-Total-Count", count["count(*)"]);

    return res.status(201).json(patientPhotos);
  }

  async show(req, res) {
    const { id } = req.params;

    const patientPhoto = await PatientPhotoModel.getPatientPhotoById(id);

    return res.status(201).json(patientPhoto);
  }

  async store(req, res) {
    const { patient_id, file_id } = req.body;

    const patientPhoto = await PatientPhotoModel.create(patient_id, file_id);

    return res.status(201).json(patientPhoto);
  }

  async update(req, res) {
    const { patient_id, file_id } = req.body;

    const { id } = req.params;

    const patientPhoto = await PatientPhotoModel.update(id, patient_id, file_id);

    return res.status(201).json(patientPhoto);
  }

  async delete(req, res) {
    const { id } = req.params;

    await PatientPhotoModel.delete(id);
    return res.status(204).send();
  }
}

module.exports = new PatientPhotosController();
