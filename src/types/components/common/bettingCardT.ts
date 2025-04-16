export interface Competitor {
  id: string;
  name: string;
  abbreviation: string;
  countryCode: string;
}

export interface BettingOption {
  id: string;
  name: string;
  odds: number;
  betCount: number;
}

export interface BettingMarket {
  id: string;
  name: string;
  options: BettingOption[];
}

export interface MatchStatus {
  status: 'not_started' | 'live' | 'finished';
  period?: number;
}

export interface Match {
  id: string;
  league: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
}

export interface Odds {
  homeWin: number;
  draw: number;
  awayWin: number;
}

export interface BetCounts {
  homeWin: number;
  draw: number;
  awayWin: number;
}

export interface BettingCard {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeOdds: number;
  awayOdds: number;
  homeBets: number;
  awayBets: number;
}

export interface BettingCardProps {
  card: BettingCard;
}
