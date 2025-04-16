import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { addCard, setCards } from "../../features/betting/bettingSlice";
import { fetchBettingCards, postBettingCard } from "../../services/bettingApi";
import Dashboard from "../../components/Dashboard/Dashboard";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.betting.cards);

  const [isLoading, setIsLoading] = useState(false);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCards = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchBettingCards();
      dispatch(setCards(data));
    } catch (err) {
      setError("Failed to load betting cards. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCards();
  }, [dispatch]);

  const handlePlaceBet = async () => {
    setIsAddingCard(true);
    setError(null);
    try {
      const newCard = await postBettingCard();
      dispatch(addCard(newCard));
    } catch (err) {
      setError("Failed to add new card. Please try again.");
      console.error(err);
    } finally {
      setIsAddingCard(false);
    }
  };

  const handleRetry = async () => {
    setIsAddingCard(true);
    setError(null);
    try {
      const newCard = await postBettingCard();
      dispatch(addCard(newCard));
    } catch (err) {
      setError("Failed to add new card. Please try again.");
      console.error(err);
    } finally {
      setIsAddingCard(false);
    }
  };

  return (
    <Dashboard
      cards={cards}
      isLoading={isLoading}
      isAddingCard={isAddingCard}
      error={error}
      onPlaceBet={handlePlaceBet}
      onRetry={handleRetry}
    />
  );
};

export default DashboardPage;
