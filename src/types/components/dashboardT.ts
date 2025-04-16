import { BettingCard } from "./common/bettingCardT";

export interface DashboardProps {
  cards: BettingCard[];
  isLoading: boolean;
  isAddingCard: boolean;
  error: string | null;
  onPlaceBet: () => void;
  onRetry: () => void;
} 