import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { type Gift, getGiftbyCategory } from "../services/storeApi";
import GiftCard from "../components/GiftCard";
import "../css/Results.css";

type State = {
  name: string;
  age: string;
  budget: number;
  interests: string[];
};

export default function Results() {
  const { state } = useLocation() as { state: State };
  const { name, age, budget, interests } = state;

  const [gifts, setGifts] = useState<Gift[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchGifts = async () => {
      try {
        const giftData = await getGiftbyCategory("clothes");
        setGifts(giftData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
          console.error("Error fetching gifts:", err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchGifts();
  }, [state]);

  return (
    <>
      {loading ? (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <p className="text-uppercase text-primary">Loading...</p>
          <div className="spinner-border text-secondary" role="status"></div>
        </div>
      ) : error ? (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <p className="text-uppercase text-danger">Error fetching gifts.</p>
        </div>
      ) : (
        <div>
          <h2 className="text-center">Gifts for {name}</h2>
          {gifts.length > 0 ? (
            <div className="d-flex flex-wrap gap-4 justify-content-center">
              {gifts.map((gift) => (
                <GiftCard key={gift.id} {...gift} />
              ))}
            </div>
          ) : (
            <p className="text-center">No gifts found.</p>
          )}
        </div>
      )}
    </>
  );
}
