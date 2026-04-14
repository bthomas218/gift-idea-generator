const base_url = "https://api.escuelajs.co/api/v1/products/";

export type Gift = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
};

export type Category = {
  id: number;
  name: string;
  image: string;
  slug: string;
};

export const getGiftbyCategory = async (category: string): Promise<Gift[]> => {
  const response = await fetch(`${base_url}?categorySlug=${category}`);
  const data = await response.json();
  return data as Gift[];
};
