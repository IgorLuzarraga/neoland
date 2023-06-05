import { API } from "./service.config";

export const mobilDev_getAll = async () => {
  return API.get("/mobilesDev/")
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};

