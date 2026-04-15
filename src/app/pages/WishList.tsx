import { useWishListContext } from "../context/WishListContext";
import GiftCard from "../components/GiftCard";

export default function WishList() {
  const { wishList } = useWishListContext();
  return (
    <>
      <h1>Wish List</h1>
      {wishList.length === 0 ? (
        <p>Your wish list is empty.</p>
      ) : (
        <div className="row">
          {wishList.map((gift) => (
            <div className="col-md-4" key={gift.id}>
              <GiftCard {...gift} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
