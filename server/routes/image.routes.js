const imageRouter = require('express').Router();
const upload = require('../helpers/multer.helper');
const authentication = require('../helpers/verification.helper');

const {
  addImage,
  getAllImages,
  deleteImage,
} = require('../controllers/image.controller');
const { image } = require('../config/cloudinary');

imageRouter.post('/', upload.single('image'), addImage);
imageRouter.get('/', getAllImages);
imageRouter.delete('/:id', deleteImage);

module.exports = imageRouter;
