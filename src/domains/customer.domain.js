const fs = require('fs/promises'); 
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
const customerModel = require('../models/customer.model');

const create = async (data) => {

  const result = await customerModel.create(data);

  return result;
};

const getList = async () => {
  
  const result = await customerModel.find({deleted: false});

  return result;
};

const updateById = async (data, id) => {

  const result = await customerModel.updateOne({_id: id}, data);

  return result;
};

const deleteById = async (id) => {

  const result = await customerModel.deleteOne({_id: id});

  return result;
};

const uploadFile = async (files, id) => {

  const pathFile = appDir + '/src/uploads';
  const filename = files.file[0].originalname;
  const saveToFolder = pathFile + '/' + filename;
  await fs.writeFile(saveToFolder, files.file[0].buffer,  'binary');

  return filename;
}

const getFileByName = async (fileName) => {

  const pathFile = appDir + '/src/uploads/' + fileName;
  const file = await fs.readFile(pathFile);

  return file;
}

module.exports = {
  create,
  getList,
  updateById,
  deleteById,
  uploadFile,
  getFileByName
};