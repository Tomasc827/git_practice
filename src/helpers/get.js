import axios from "axios";

const url = "http://localhost:5000/books";

export const getAllData = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const getSingleData = async (id) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};
