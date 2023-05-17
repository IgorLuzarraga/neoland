const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Character = require("../models/Character.model");

//! ---------------------------------------------------------------------
//? -------------------------------POST ---------------------------------
//! ---------------------------------------------------------------------

const create = async (req, res, next) => {
  try {
    await Character.syncIndexes()

    // Create a character model with the data received in req.body
    const newCharacter = new Character(req.body)

    // Image received with the req
    newCharacter.image = req.file.path

    // We store the character in the DB
    const saveCharacter = await newCharacter.save()

    // Check if we saved the data
    if (saveCharacter) {
      // The character is correctly saved, we send a 200 and the saved character
      return res.status(200).json(saveCharacter)
    } else {
      // Something went wrong, we send a 404
      return res.status(404).json("Sorry! It was not possible to save the character")
    }
  } catch (error) {
    // If something went wrong, we should remove the pic from cloudinary
    // because we store the pic in cloudinary but we didn't store anything in the DB.
    deleteImgCloudinary(req.file.path)
    return next(error)
  }
}

//! ---------------------------------------------------------------------
//? ------------------------------GETALL --------------------------------
//! ---------------------------------------------------------------------
const getAll = async (req, res, next) => {
  try {
    // The moongose find function returns all the DB elements
    const allCharacter = await Character.find()

    if (allCharacter) {
      // Everything went ok, returns 200 and all characters
      return res.status(200).json(allCharacter)
    } else {
      // Something went wrong, we returns 404
      return res.status(404).json("Characters not found")
    }
  } catch (error) {
    return next(error)
  }
};

//! ---------------------------------------------------------------------
//? ------------------------------GETBYID -------------------------------
//! ---------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterById = await Character.findById(id);
    if (characterById) {
      return res.status(200).json(characterById);
    } else {
      return res.status(404).json("Not found Character by ID");
    }
  } catch (error) {
    return next(error);
  }
}

//! ---------------------------------------------------------------------
//? ----------------------------- GET BY NAME ---------------------------
//! ---------------------------------------------------------------------

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const characterByName = await Character.find({ name });
    if (characterByName) {
      return res.status(200).json(characterByName);
    } else {
      return res.status(404).json("Not found Character by name");
    }
  } catch (error) {
    return next(error);
  }
};

//! ---------------------------------------------------------------------
//? ----------------------------- UPDATE --------------------------------
//! ---------------------------------------------------------------------

const updateCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;

    // We find the character by Id
    const characterById = await Character.findById(id);

    const oldImgUrl = characterById.image;

    // If we find the character in the DB, we proced to update it
    if (characterById) {
      // New Character model
      const updateCharacter = new Character(req.body);
      
      // Update with the old Id, to keep the same Character
      updateCharacter._id = id;

      // If we recived a file, we introduce it in updateCharacter
      if (req.file) {
        updateCharacter.image = req.file.path;
      } else {
        // If we didn't recive a file, we introduce the old one in updateCharacter
        updateCharacter.image = oldImgUrl;
      }

      // Moongoose function to find by Id and update the character
      const saveCharacter = await Character.findByIdAndUpdate(
        id,
        updateCharacter
      )
      
      if (saveCharacter) {
        // character updated, we delete de old imf from Cloudinary
        deleteImgCloudinary(oldImg);
        return res.status(200).json(await Character.findById(id));
      } else {
        // Something went wrong. Send a 404
        return res.status(404).json("Something went wrong! Character not updated!");
      }
    } else {
      // Send a 404 id we didn't find the character
      return res.status(404).json("Not Found character by id");
    }
  } catch (error) {
    // Delete data from Clodinary in case we didn't find the Character in the DB.
    // We should not let data (images) that we don't need
    if (req.file) {
      // req.file.path includes the cloudinary url
      deleteImgCloudinary(req.file.path);
    }

    // In case of error, report the error to the backend Log
    return next(error);
  }
}

//! ---------------------------------------------------------------------
//? ----------------------------- DELETE --------------------------------
//! ---------------------------------------------------------------------

const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;

    // We find by Id and remove it
    const deleteCharacter = await Character.findByIdAndDelete(id);

    // deleteCharacter contains the removed element,
    // but sometimes dosen't work, so watch ouu!
    if (deleteCharacter) {
      // We check if the deleted element is in the DB,
      // if don't, we remove the image from Cloudinary
      // if the element was not remove, we call next and finish the execution
      (await Character.findById(id))
        ? next("Not possible remove the character")
        : deleteImgCloudinary(deleteCharacter.image);

      // If everithhing went ok, we return a 200 Ok.
      // Just in case, we realize a test to check if the Character was remove correctly
      return res.status(200).json({
        deleteObject: deleteCharacter,
        test: (await Character.findById(id)) ? "Character NOT deleted" : "Character deleted",
      });
    } else {
      return res.status(404).json("Not found character error delete");
    }
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  create,
  getAll,
  getById,
  getByName,
  updateCharacter,
  deleteCharacter,
}

