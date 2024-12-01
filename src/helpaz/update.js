import axios from "axios";

const url = "http://localhost:5000/pets"

export const updateData = async (id,data) => {
    const response = await axios.put(`${url}/${id}`, data)
    return response.data
}