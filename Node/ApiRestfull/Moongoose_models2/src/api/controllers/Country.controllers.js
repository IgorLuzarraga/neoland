const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Country = require("../models/Country.model");

//! ---------------------------------------------------------------------
//? -------------------------------POST ---------------------------------
//! ---------------------------------------------------------------------

const create = async (req, res, next) => {
  try {
    await Country.syncIndexes()

    // Create a Country model with the data received in req.body
    const newCountry = new Country(req.body)

    // Image received with the req
    newCountry.image = req.file.path

    // We store the Country in the DB
    const saveCountry = await newCountry.save()

    // Check if we saved the data
    if (saveCountry) {
      // The Country is correctly saved, we send a 200 and the saved Country
      return res.status(200).json(saveCountry)
    } else {
      // Something went wrong, we send a 404
      return res.status(404).json("Sorry! It was not possible to save the Country")
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
    const allCountry = await Country.find()

    if (allCountry) {
      // Everything went ok, returns 200 and all Countrys
      return res.status(200).json(allCountry)
    } else {
      // Something went wrong, we returns 404
      return res.status(404).json("Countrys not found")
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
    const CountryById = await Country.findById(id);
    if (CountryById) {
      return res.status(200).json(CountryById);
    } else {
      return res.status(404).json("Not found Country by ID");
    }
  } catch (error) {
    return next(error);
  }
}


//! ---------------------------------------------------------------------
//? ----------------------------- GET BY CAPITAL ---------------------------
//! ---------------------------------------------------------------------

const getByCapital = async (req, res, next) => {
  try {
    const { capital } = req.params;
    const CountryByCapital = await Country.find({ capital });
    if (CountryByCapital) {
      return res.status(200).json(CountryByCapital);
    } else {
      return res.status(404).json("Not found Country by capital");
    }
  } catch (error) {
    return next(error);
  }
}

// //! ---------------------------------------------------------------------
// //? ----------------------------- GET BY NAME ---------------------------
// //! ---------------------------------------------------------------------

// const getByName = async (req, res, next) => {
//   try {
//     const { name } = req.params;
//     const CountryByName = await Country.find({ name });
//     if (CountryByName) {
//       return res.status(200).json(CountryByName);
//     } else {
//       return res.status(404).json("Not found Country by name");
//     }
//   } catch (error) {
//     return next(error);
//   }
// };

//! ---------------------------------------------------------------------
//? ----------------------------- UPDATE --------------------------------
//! ---------------------------------------------------------------------

const updateCountry = async (req, res, next) => {
  try {
    const { id } = req.params;

    // We find the Country by Id
    const CountryById = await Country.findById(id);

    const oldImgUrl = CountryById.image;

    // If we find the Country in the DB, we proced to update it
    if (CountryById) {
      // New Country model
      const updateCountry = new Country(req.body);
      
      // Update with the old Id, to keep the same Country
      updateCountry._id = id;

      // If we recived a file, we introduce it in updateCountry
      if (req.file) {
        updateCountry.image = req.file.path;
      } else {
        // If we didn't recive a file, we introduce the old one in updateCountry
        updateCountry.image = oldImgUrl;
      }

      // Moongoose function to find by Id and update the Country
      const saveCountry = await Country.findByIdAndUpdate(
        id,
        updateCountry
      )
      
      if (saveCountry) {
        // Country updated, we delete de old imf from Cloudinary
        deleteImgCloudinary(oldImgUrl);
        return res.status(200).json(await Country.findById(id));
      } else {
        // Something went wrong. Send a 404
        return res.status(404).json("Something went wrong! Country not updated!");
      }
    } else {
      // Send a 404 id we didn't find the Country
      return res.status(404).json("Not Found Country by id");
    }
  } catch (error) {
    // Delete data from Clodinary in case we didn't find the Country in the DB.
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

const deleteCountry = async (req, res, next) => {
  try {
    const { id } = req.params;

    // We find by Id and remove it
    const deleteCountry = await Country.findByIdAndDelete(id);

    // deleteCountry contains the removed element,
    // but sometimes dosen't work, so watch ouu!
    if (deleteCountry) {
      // We check if the deleted element is in the DB,
      // if don't, we remove the image from Cloudinary
      // if the element was not remove, we call next and finish the execution
      (await Country.findById(id))
        ? next("Not possible remove the Country")
        : deleteImgCloudinary(deleteCountry.image);

      // If everithhing went ok, we return a 200 Ok.
      // Just in case, we realize a test to check if the Country was remove correctly
      return res.status(200).json({
        deleteObject: deleteCountry,
        test: (await Country.findById(id)) ? "Country NOT deleted" : "Country deleted",
      });
    } else {
      return res.status(404).json("Not found Country error delete");
    }
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  create,
  getAll,
  getById,
  getByCapital,
  updateCountry,
  deleteCountry,
}

