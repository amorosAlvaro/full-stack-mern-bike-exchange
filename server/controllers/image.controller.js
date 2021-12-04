const cloudinary = require('../config/cloudinary');
const Image = require('../models/image.model');

async function addImage(req, res, next) {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);
    const image = new Image({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await image.save();
    res.json(image);
  } catch (err) {
    next(err);
  }
}

async function getAllImages(req, res, next) {
  try {
    const image = await Image.find();
    res.json(image);
  } catch (error) {
    next(error);
  }
}

// FIX if Image is not found the server crashes
async function deleteImage(req, res, next) {
  try {
    const image = await Image.findByIdAndDelete(req.body._id);
    console.log(image);
    await cloudinary.uploader.destroy(image.cloudinary_id);
    await image.remove();
    res.json(image);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addImage,
  getAllImages,
  deleteImage,
};
