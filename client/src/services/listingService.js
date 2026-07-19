import api from "./api";

export const getListings = async () => {
  const response = await api.get("/listings/");
  return response.data;
};

export const getListingById = async (id) => {
  const response = await api.get(`/listings/${id}`);
  return response.data;
};

export const createListing = async (listing) => {
  const response = await api.post("/listings/", listing);
  return response.data;
};

export const updateListing = async (id, listing) => {
  const response = await api.put(`/listings/${id}`, listing);
  return response.data;
};

export const deleteListing = async (id) => {
  await api.delete(`/listings/${id}`);
};