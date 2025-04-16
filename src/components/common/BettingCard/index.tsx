import React from "react";
import { CardWrapper, Teams, Odds, Bets } from "./BettingCard.styles";
import { BettingCardProps } from "../../../types/components/common/bettingCardT";

export const BettingCard: React.FC<BettingCardProps> = ({ card }) => {
  return (
    <CardWrapper
      role="article"
      aria-label={`${card.homeTeam} vs ${card.awayTeam}`}
    >
      <Teams>
        <span aria-label="Home team">{card.homeTeam}</span>
        <span aria-hidden="true">vs</span>
        <span aria-label="Away team">{card.awayTeam}</span>
      </Teams>

      <Odds>
        <span aria-label={`${card.homeTeam} odds`}>
          {card.homeOdds.toFixed(2)}
        </span>
        <span aria-hidden="true">vs</span>
        <span aria-label={`${card.awayTeam} odds`}>
          {card.awayOdds.toFixed(2)}
        </span>
      </Odds>

      <Bets>
        <span aria-label={`${card.homeTeam} bets`}>{card.homeBets} bets</span>
        <span aria-hidden="true">vs</span>
        <span aria-label={`${card.awayTeam} bets`}>{card.awayBets} bets</span>
      </Bets>
    </CardWrapper>
  );
};

export default BettingCard;
