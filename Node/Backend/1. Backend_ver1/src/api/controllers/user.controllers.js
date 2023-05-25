const { deleteImgCloudinary } = require('../../middleware/files.middleware');
const setError = require('../../helpers/handle-error');
const randomCode = require('../../utils/randomCode');
const sendConfirmationCodeByEmail = require('../../utils/sendConfirmationCodeByEmail');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/user.model');
const { getTestEmailSend } = require('../../state/state.data');
const nodemailer = require('nodemailer');
const { generateToken } = require('../../utils/token');
const randomPassword = require('../../utils/randomPassword');

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
const BASE_URL_COMPLETE = `${BASE_URL}${PORT}`;

//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER CORTO EN CODIGO ------------------------
//! -----------------------------------------------------------------------------

const register = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    let confirmationCode = randomCode();
    const { email, name } = req.body;

    const userExist = await User.findOne(
      { email },
      { name }
    );

    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png';
      }

      const userSave = await newUser.save();

      if (userSave) {
        sendConfirmationCodeByEmail(email, name, confirmationCode);

        setTimeout(() => {
          if (getTestEmailSend()) {
            return res.status(200).json({
              user: userSave,
              confirmationCode,
            });
          } else {
            return res.status(404).json({
              user: userSave,
              confirmationCode: 'error, resend code',
            });
          }
        }, 1100);
      }
    } else {
      deleteImgCloudinary(catchImg);
      return res.status(409).json('this user already exist');
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER LARGO EN CODIGO ------------------------
//! -----------------------------------------------------------------------------
const registerSlow = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    let confirmationCode = randomCode();
    const userEmail = req.body.email;
    const userName = req.body.name;

    // const { email, name } = req.body;

    // const userExist = await User.findOne(
    //   { email: req.body.email },
    //   { name: req.body.name }
    // );

    const userExist = await User.findOne(
      { email: userEmail },
      { name: userName }
    );

    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png';
      }

      const userSave = await newUser.save();

      if (userSave) {
        const nodemailer_email = process.env.NODEMAILER_EMAIL;
        const nodemailer_password = process.env.NODEMAILER_PASSWORD;

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: nodemailer_email,
            pass: nodemailer_password,
          },
        });

        const mailOptions = {
          from: nodemailer_email,
          to: userEmail,
          subject: 'Confirmation code',
          text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${userName}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            return res.status(404).json({
              user: userSave,
              confirmationCode: 'error, resend code',
            });
          } else {
            return res.status(200).json({
              user: userSave,
              confirmationCode,
            });
          }
        });
      }
    } else {
      deleteImgCloudinary(catchImg);
      return res.status(409).json('this user already exist');
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};
//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER CON REDIRECT----------------------------
//! -----------------------------------------------------------------------------
const registerWithRedirect = async (req, res, next) => {
  let catchImg = req.file?.path;

  try {
    let confirmationCode = randomCode();
    const { email, name } = req.body;

    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );
    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png';
      }

      const userSave = await newUser.save();

      if (userSave) {
        return res.redirect(
          `${BASE_URL_COMPLETE}/api/v1/users/register/sendMail/${userSave._id}`
        );
      }
    } else {
      deleteImgCloudinary(catchImg);
      return res.status(409).json('this user already exist');
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? ------------------ CONTRALADORES QUE PUEDEN SER REDIRECT --------------------
//! ----------------------------------------------------------------------------

//!!! los controladores redirect son aquellos que son llamados por parte del 
// cliente (los routers) o bien por otros controladores 

const sendCode = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDB = await User.findById(id);

    const emailEnv = process.env.NODEMAILER_EMAIL;
    const password = process.env.NODEMAILER_PASSWORD;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailEnv,
        pass: password,
      },
    });

    const mailOptions = {
      from: emailEnv,
      to: userDB.email,
      subject: 'Confirmation code',
      text: `tu codigo es ${userDB.confirmationCode}, gracias por confiar en nosotros ${userDB.name}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(404).json({
          user: userDB,
          confirmationCode: 'error, resend code',
        });
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).json({
          user: userDB,
          confirmationCode: userDB.confirmationCode,
        });
      }
    });
  } catch (error) {
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? --------------------------------LOGIN ---------------------------------------
//! -----------------------------------------------------------------------------

const login = async (req, res, next) => {
  try {
    //const { email, password } = req.body;

    const userEmail = req.body.email
    const userPassword = req.body.password

    const userDB = await User.findOne({ email: userEmail });

    console.log("User email: ", userEmail)
    console.log("userDB: ", userDB)
    console.log('User password: ', userPassword)

    if (userDB) {
      if (bcrypt.compareSync(userPassword, userDB.password)) {
        const token = generateToken(userDB._id, userEmail);
        return res.status(200).json({
          user: {
            email: userEmail,
            _id: userDB._id,
          },
          token,
        });
      } else {
        return res.status(404).json('passwords dont match');
      }
    } else {
      return res.status(404).json('User not register');
    }
  } catch (error) {
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? -----------------------CONTRASEÑAS Y SUS CAMBIOS-----------------------------
//! -----------------------------------------------------------------------------

//? -----------------------------------------------------------------------------
//! ------------------CAMBIO DE CONTRASEÑA CUANDO NO ESTAS LOGADO---------------
//? -----------------------------------------------------------------------------

const changeForgottenPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userDb = await User.findOne({ email });
    if (userDb) {
      return res.redirect(
        `${BASE_URL_COMPLETE}/api/v1/users/sendPasswordByEmail/${userDb._id}`
      );
    } else {
      return res.status(404).json('User no register');
    }
  } catch (error) {}
};

const sendPasswordByEmail = async (req, res, next) => {
  try {
    const { id } = req.params;

    const userDb = await User.findById(id);

    const nodemailer_email = process.env.NODEMAILER_EMAIL;
    const nodemailer_password = process.env.NODEMAILER_PASSWORD;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: nodemailer_email,
        pass: nodemailer_password,
      },
    });

    let randomPasswordSecure = randomPassword();
    
    const mailOptions = {
      from: nodemailer_email,
      to: userDb.email,
      subject: '-----',
      text: `User: ${userDb.name}. Your new code login is ${randomPasswordSecure} Hemos enviado esto porque tenemos una solicitud de cambio de contraseña, si no has sido ponte en contacto con nosotros, gracias.`,
    };

    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        return res.status(404).json('dont send email and dont update user');
      } else {
        //console.log('Email sent: ' + info.response);
        const newPasswordBcrypt = bcrypt.hashSync(randomPasswordSecure, 10);
        await User.findByIdAndUpdate(id, { password: newPasswordBcrypt });
        const updatedUser = await User.findById(id);

        if (bcrypt.compareSync(randomPasswordSecure, updatedUser.password)) {
          return res.status(200).json({
            updateUser: true,
            sendPassword: true,
          });
        } else {
          return res.status(404).json({
            updateUser: false,
            sendPassword: true,
          });
        }
      }
    });
  } catch (error) {
    return next(error);
  }
};

//? -----------------------------------------------------------------------------
//! ------------------CAMBIO DE CONTRASEÑA CUANDO YA SE ESTA LOGEADO---------------
//? -----------------------------------------------------------------------------


const changePassword = async (req, res, next) => {
  try {
    const { password, newPassword } = req.body;

    const { _id } = req.user;

    if (bcrypt.compareSync(password, req.user.password)) {

      const newPasswordHashed = bcrypt.hashSync(newPassword, 10);

      await User.findByIdAndUpdate(_id, { password: newPasswordHashed });

      const userUpdate = await User.findById(_id);

      if (bcrypt.compareSync(newPassword, userUpdate.password)) {
        return res.status(200).json({
          updateUser: true,
        });
      } else {
        return res.status(200).json({
          updateUser: false,
        });
      }
    } else {
      return res.status(404).json('passwords dont match');
    }
  } catch (error) {
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? ---------------------------------UPDATE--------------------------------------
//! -----------------------------------------------------------------------------
const update = async (req, res, next) => {

  let catchImg = req.file?.path;

  try {

    console.log("req.body: ", req.body)
    const patchUser = new User(req.body);

    console.log("patchUser: ", patchUser)
    
    if (req.file) {
      patchUser.image = req.file.path;
    }

    patchUser._id = req.user._id;
    patchUser.password = req.user.password;
    patchUser.rol = req.user.rol;

    await User.findByIdAndUpdate(req.user._id, patchUser);

    if (req.file) {
      deleteImgCloudinary(req.user.image);
    }

    const updateUser = await User.findById(req.user._id);
    const updateKeys = Object.keys(req.body);

    const testUpdate = [];
    updateKeys.forEach((key) => {
      if (updateUser[key] === req.body[key]) {
        testUpdate.push({
          [key]: true,
        });
      }
    });

    if (req.file) {
      updateUser.image == req.file.path
        ? testUpdate.push({
            file: true,
          })
        : testUpdate.push({
            file: false,
          });
    }

    return res.status(200).json({
      testUpdate,
    });

  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? ----------------------------- DELETE ----------------------------------------
//! -----------------------------------------------------------------------------

const deleteUser = async (req, res, next) => {
  try {
    const { _id, image } = req.user;

    await User.findByIdAndDelete(_id);
    if (await User.findById(_id)) {
      return res.status(404).json('Dont delete');
    } else {
      deleteImgCloudinary(image);
      return res.status(200).json('ok delete');
    }
  } catch (error) {
    deleteImgCloudinary(req.user.image);
    return next(error);
  }
};


//! ---------------------------------------------------------------------
//? ------------------------------GETALL --------------------------------
//! ---------------------------------------------------------------------
const getAll = async (req, res, next) => {
  try {
    const allUsers = await User.find().populate("movies");
    if (allUsers) {
      return res.status(200).json(allUsers);
    } else {
      return res.status(404).json("No users found");
    }
  } catch (error) {
    return next(error);
  }
};

//! ---------------------------------------------------------------------
//? ------------------------------GETBYID -------------------------------
//! ---------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userById = await User.findById(id).populate("movies");
    if (userById) {
      return res.status(200).json(userById);
    } else {
      return res.status(404).json("No user found");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  register,
  registerSlow,
  sendCode,
  registerWithRedirect,
  login,
  changeForgottenPassword,
  sendPasswordByEmail,
  changePassword,
  update,
  deleteUser,
  getAll,
  getById
};
