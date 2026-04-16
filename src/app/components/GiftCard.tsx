import { type Gift } from "../types";
import { useWishListContext } from "../context/WishListContext";
import type React from "react";

export default function GiftCard({
  id,
  title,
  slug,
  price,
  description,
  category,
  images,
}: Gift) {
  const { addToWishList, isInWishList, removeFromWishList } =
    useWishListContext();

  const handleAddToWishList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToWishList({ id, title, slug, price, description, category, images });
  };

  const handleRemoveFromWishList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFromWishList(id);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={images[0] || "https://placehold.co/600x400"}
        onError={(e) => (e.currentTarget.src = "https://placehold.co/600x400")}
        className="card-img-top"
        alt={title}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{category.name}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>${price}</strong>
        </p>
        {isInWishList(id) ? (
          <button
            className="btn btn-secondary"
            onClick={handleRemoveFromWishList}
          >
            Remove From Wishlist
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleAddToWishList}>
            Add to Wishlist
          </button>
        )}
      </div>
    </div>
  );
}
