import { useWishListContext } from "../context/WishListContext";
import GiftCard from "../components/GiftCard";
import GiftGrid from "../components/GiftGrid";

export default function WishList() {
  const { wishList } = useWishListContext();
  return (
    <>
      <h1 className="text-center">Wish List</h1>
      {wishList.length === 0 ? (
        <p className="text-center">Your wish list is empty.</p>
      ) : (
        <GiftGrid gifts={wishList} />
      )}
    </>
  );
}
