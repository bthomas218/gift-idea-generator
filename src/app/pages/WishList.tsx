import { useWishListContext } from "../context/WishListContext";
import GiftCard from "../components/GiftCard";

export default function WishList() {
  const { wishList } = useWishListContext();
  return (
    <>
      <h1 className="text-center">Wish List</h1>
      {wishList.length === 0 ? (
        <p className="text-center">Your wish list is empty.</p>
      ) : (
        <div className="row">
          {wishList.map((gift) => (
            <div
              className="d-flex flex-wrap gap-4 justify-content-center"
              key={gift.id}
            >
              <GiftCard {...gift} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
