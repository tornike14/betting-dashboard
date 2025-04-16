import React from "react";
import {
  Button,
  Grid,
  LoadingMessage,
  ErrorMessage,
  Flex,
} from "../../styles/commonComponents";
import BettingCard from "../common/BettingCard";
import { DashboardProps } from "../../types/components/dashboardT";
import LoadingAnimation from "../../assets/svgs/loading-animation.svg";

const Dashboard: React.FC<DashboardProps> = ({
  cards,
  isLoading,
  isAddingCard,
  error,
  onPlaceBet,
  onRetry,
}) => {
  const hasCards = cards.length > 0;
  const showEmptyState = !hasCards && !isLoading && !error;
  
  return (
    <Flex direction="column" align="center" justify="center">
      <h1>Betting Dashboard</h1>

      {error ? (
        <ErrorMessage role="alert">
          {error}
          <Button onClick={onRetry} style={{ marginLeft: "1rem" }}>
            Retry
          </Button>
        </ErrorMessage>
      ) : (
        <Button
          onClick={onPlaceBet}
          disabled={isAddingCard || isLoading}
          aria-busy={isAddingCard}
        >
          {isAddingCard ? "Adding..." : "Place a Bet"}
        </Button>
      )}

      {isLoading && !hasCards ? (
        <LoadingMessage role="status" aria-live="polite">
          <img
            src={LoadingAnimation}
            alt="Loading"
            style={{ width: "100px" }}
          />
        </LoadingMessage>
      ) : (
        <Grid role="grid" aria-label="Betting cards grid">
          {cards.map((card) => (
            <BettingCard key={card.id} card={card} />
          ))}
          
          {showEmptyState && (
            <div style={{ gridColumn: "1 / -1", textAlign: "center" }}>
              No betting cards available. Click "Place a Bet" to add one.
            </div>
          )}
        </Grid>
      )}
    </Flex>
  );
};

export default Dashboard;
