import { type Gift } from "../types";
import GiftCard from "./GiftCard";

type GiftGridProps = {
  gifts: Gift[];
};

export default function GiftGrid({ gifts }: GiftGridProps) {
  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center">
      {gifts.map((gift) => (
        <GiftCard key={gift.id} {...gift} />
      ))}
    </div>
  );
}
