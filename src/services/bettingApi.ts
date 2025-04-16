import { BettingCard } from "../types/components/common/bettingCardT";
import { generateBettingCard } from "../utils/bettingUtils";

/**
 * Simulates fetching betting cards from a server
 * 
 * @returns Promise<BettingCard[]> A promise that resolves to an array of betting cards
 */
export const fetchBettingCards = (): Promise<BettingCard[]> => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 500) + 300;
    
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error("Failed to fetch betting cards"));
        return;
      }
      
      const initialCards: BettingCard[] = [];
      for (let i = 0; i < 3; i++) {
        initialCards.push(generateBettingCard());
      }
      resolve(initialCards);
    }, delay);
  });
};

/**
 * Simulates posting a new betting card to a server
 * 
 * @returns Promise<BettingCard> A promise that resolves to a newly created betting card
 */
export const postBettingCard = (): Promise<BettingCard> => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 500) + 300;
    
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error("Failed to create new betting card"));
        return;
      }
      
      resolve(generateBettingCard());
    }, delay);
  });
};
