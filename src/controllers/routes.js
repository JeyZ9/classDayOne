const customerController = require('./customer.controller');

module.exports = (app, upload) => {
  app.post('/customer/create', customerController.create);
  app.get('/customer/get-list', customerController.getList);
  app.put('/customer/:id/update', customerController.updateById);
  app.delete('/customer/:id/delete', customerController.deleteById);
  app.post('/customer/:id/upload', upload.fields([{ name: 'file' }]), customerController.uploadFile);
  app.get('/file/:fileName', customerController.getFile);
};