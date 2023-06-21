import { Axios } from "./@core";

const PATH = "/search";

export const SearchApi = (content) => {
  return Axios.get(PATH + `?key=${content}`);
};
