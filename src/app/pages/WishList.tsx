import { useWishListContext } from "../context/WishListContext";
import GiftGrid from "../components/GiftGrid";

export default function WishList() {
  const { wishList, currentRecipient } = useWishListContext();
  return (
    <>
      <h1 className="text-center">
        {currentRecipient ? `${currentRecipient}'s Wish List` : "Wish List"}
      </h1>
      {wishList.length === 0 ? (
        <p className="text-center">
          {currentRecipient
            ? `Your wish list for ${currentRecipient} is empty.`
            : "Your wish list is empty."}
        </p>
      ) : (
        <GiftGrid gifts={wishList} />
      )}
    </>
  );
}
