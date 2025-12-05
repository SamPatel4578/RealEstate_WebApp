import axios from "axios";

const API_BASE_URL = "https://localhost:7282/api";

export const getAllProperties = async () => {
    return await axios.get(`${API_BASE_URL}/PropertiesApi`);
};

export const getPropertyById = async (id) => {
    return await axios.get(`${API_BASE_URL}/PropertiesApi/${id}`);
};

export const getSalesProperties = async () => {
    return await axios.get(`${API_BASE_URL}/SalesPropertiesApi`);
};

export const getRentalProperties = async () => {
    return await axios.get(`${API_BASE_URL}/RentalPropertiesApi`);
};
