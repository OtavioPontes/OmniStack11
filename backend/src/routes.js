const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/', (req, res) => {

    return res.send("Miau");

})

routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.index);
routes.post("/ongs", OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);



module.exports = routes;