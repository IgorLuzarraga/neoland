import { API } from "./service.config";

export const registerUser = async (formData) => {
  return API.post("/users/register/", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};


