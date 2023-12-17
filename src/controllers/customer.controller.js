const customerDomain = require('../domains/customer.domain');

const create = async (req, res, next) => {
  const { body } = req;

  const response = await customerDomain.create(body).catch(next);

  res.send(response);
};

const getList = async (req, res, next) => {
  
  const response = await customerDomain.getList().catch(next);

  res.send(response);
};

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  const response = await customerDomain.updateById(body, id).catch(next);

  res.send(response);
};

const deleteById = async (req, res, next) => {
  const { id } = req.params;

  const response = await customerDomain.deleteById(id).catch(next);

  res.send(response);
};

const uploadFile = async (req, res, next) => {
  const { id } = req.params;
  const { files } = req; 

  const response = await customerDomain.uploadFile(files, id).catch(next);

  res.send(response);
}

const getFile = async (req, res, next) => {
  const { fileName } = req.params;

  const file = await customerDomain.getFileByName(fileName).catch(next);

  res.writeHead(200, {
    'Content-Length': file.length
  });
  res.end(file); 
}

module.exports = {
  create,
  getList,
  updateById,
  deleteById,
  uploadFile,
  getFile
};