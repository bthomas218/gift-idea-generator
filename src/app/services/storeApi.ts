import { type Gift, type Category } from "../types";

const base_url = "https://api.escuelajs.co/api/v1/products/";

export const getGiftbyCategory = async (category: string): Promise<Gift[]> => {
  const response = await fetch(`${base_url}?categorySlug=${category}`);
  const data = await response.json();
  return data as Gift[];
};
