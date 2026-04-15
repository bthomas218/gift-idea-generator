import { useState, useEffect, useContext, createContext } from "react";
import { type Gift } from "../types";

type IWishListContext = {
  wishList: Gift[];
  addToWishList: (gift: Gift) => void;
  removeFromWishList: (id: number) => void;
  isInWishList: (id: number) => boolean;
};

export const WishListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wishList, setWishList] = useState<Gift[]>([]);

  useEffect(() => {
    const storedWishList = localStorage.getItem("wishList");
    if (storedWishList) {
      setWishList(JSON.parse(storedWishList));
    }
  }, []);

  const addToWishList = (gift: Gift) => {
    setWishList((prev) => [...prev, gift]);
  };

  const removeFromWishList = (id: number) => {
    setWishList((prev) => prev.filter((gift) => gift.id !== id));
  };

  const isInWishList = (id: number) => {
    return wishList.some((gift) => gift.id === id);
  };

  return (
    <WishListContext.Provider
      value={{ wishList, addToWishList, removeFromWishList, isInWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const WishListContext = createContext<IWishListContext | undefined>(undefined);

export const useWishListContext = () => {
  const context = useContext(WishListContext);
  if (!context) {
    throw new Error(
      "useWishListContext must be used within a WishListProvider",
    );
  }
  return context;
};
