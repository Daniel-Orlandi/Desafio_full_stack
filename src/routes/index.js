const { response } = require('../app')

//Imports 
const routes = require('express').Router()
const PatientsController = require('../controllers/patient_controller')
const locationController = require('../controllers/locations_controller')
const MedicalRecordController = require('../controllers/medical_record_controller')
const PatientPhotosController = require('../controllers/patient_photos_controller')
const fileController = require('../controllers/file_controller')

//User routes
routes.get('/patients', PatientsController.index)
routes.get('/patients/:id', PatientsController.show)
routes.post('/patients', PatientsController.store)
routes.put('/patients/:id', PatientsController.update)
routes.delete('/patients/:id', PatientsController.delete)

//Medical Record routes
routes.get('/medical_record', MedicalRecordController.index)
routes.get('/medical_record/:id', MedicalRecordController.show)
routes.post('/medical_record', MedicalRecordController.store)
routes.put('/medical_record/:id', MedicalRecordController.update)
routes.delete('/medical_record/:id', MedicalRecordController.delete)

//Patient Photo routes
routes.get('/patient_photos', PatientPhotosController.index)
routes.get('/patient_photos/:id', PatientPhotosController.show)
routes.post('/patient_photos', PatientPhotosController.store)
routes.put('/patient_photos/:id', PatientPhotosController.update)
routes.delete('/patient_photos/:id', PatientPhotosController.delete)

//File routes
routes.get('/file', fileController.index)
routes.get('/file/:id', fileController.show)
routes.post('/file', fileController.store)
routes.put('/file/:id', fileController.update)
routes.delete('/file/:id', fileController.delete)

//Location routes
routes.get('/locations', locationController.index)
routes.get('/locations/:id', locationController.show)
routes.post('/locations', locationController.store)
routes.put('/locations/:id', locationController.update)
routes.delete('/locations/:id', locationController.delete)

module.exports = routes
