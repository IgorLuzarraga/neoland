import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useUserError = (res, setRegisterOk) => {
  console.log("useUserError -> res: ", res)

  // 200 --->
  if (res?.status == 200) {
    console.log("useUserError -> write data in local storage: ", res);
    localStorage.setItem("data", JSON.stringify(res));
    setRegisterOk(() => true);
    Swal.fire({
      icon: "success",
      title: "Welcome to my Page",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  // res --> 409 --> Usuario ya registrado

  if (res?.response?.status == 409)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User already exist!",
      showConfirmButton: false,
      timer: 1500,
    });
  // res --> 500 --> Error general del server

  if (res?.response?.status == 500)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Sorry, internal error",
      showConfirmButton: false,
      timer: 1500,
    });

  // res --> 404 --> codigo en el envio del codigo

  // error --> nombre de usuario ya exista // error ---> correo ya existe

  if (
    res?.response?.data?.includes(
      "duplicate key error collection: userProyect.users index: name_1 dup key: { name"
    )
  )
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Sorry choose another name",
      showConfirmButton: false,
      timer: 1500,
    });

  // error ---> validacion de la contraseña

  if (res?.response?.data?.includes("validation failed: password"))
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Min 8 characters, 1 upper case, 1 lower case and a special character",
      showConfirmButton: false,
      timer: 1500,
    });
};

export default useUserError;
