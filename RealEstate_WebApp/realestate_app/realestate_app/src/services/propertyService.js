import axios from "axios";

/* =================================================
   BASE CONFIG
================================================= */
const API_ROOT = "https://localhost:7282/api";
const PROPERTY_API = `${API_ROOT}/property`;


// Used by property listings pages
export const getAllProperties = async () => {
    try {
        const res = await axios.get(`${API_ROOT}/Property`);
        return res.data;
    } catch (err) {
        console.error("getAllProperties failed", err);
        return [];
    }
};

// Used by property details page
export const getPropertyById = async (id) => {
    try {
        const res = await axios.get(`${API_ROOT}/PropertiesApi/${id}`);
        return res.data;
    } catch (err) {
        console.error("getPropertyById failed", err);
        return null;
    }
};

// Existing endpoints (if used elsewhere)
export const getSalesProperties = async () => {
    try {
        const res = await axios.get(`${API_ROOT}/SalesProperties`);
        return res.data;
    } catch (err) {
        console.error("getSalesProperties failed", err);
        return [];
    }
};

export const getRentalProperties = async () => {
    try {
        const res = await axios.get(`${API_ROOT}/RentalProperties`);
        return res.data;
    } catch (err) {
        console.error("getRentalProperties failed", err);
        return [];
    }
};

/* =================================================
   DASHBOARD-SPECIFIC APIs (NEW, SAFE)
================================================= */

// Used ONLY by dashboard
export const getSaleProperties = async () => {
    try {
        const res = await axios.get(`${PROPERTY_API}?type=sale`);
        return Array.isArray(res.data) ? res.data : [];
    } catch (err) {
        console.error("getSaleProperties failed", err);
        return [];
    }
};

export const getRentProperties = async () => {
    try {
        const res = await axios.get(`${PROPERTY_API}?type=rent`);
        return Array.isArray(res.data) ? res.data : [];
    } catch (err) {
        console.error("getRentProperties failed", err);
        return [];
    }
};
