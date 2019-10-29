const models  = require('../models');

module.exports = (app) => {

  app.get('/api/entities', (req, res) => {
    models.entity.findAll().then(function (entity) {
      res.send({
        title: 'Sequelize: Express Example',
        users: entity
      });
    });
  });
  app.get('/api/entity/:id', (req, res) => {
    models.entity.findById(req.params.id).then(function (entity) {
      res.send({
        title: `${req.params.id}`,
        entity: entity
      });
    });
  });
  app.post('/api/entity', (req, res) => {
    const { name,type,about} = req.body;
    models.entity.create({ name,type,about}).then((entity=> res.send(entity)));

  });
};
