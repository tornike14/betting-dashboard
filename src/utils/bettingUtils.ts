import { BettingCard } from '../types/components/common/bettingCardT';
import { SPORTS_DATA } from '../constants/sports';

export const generateOdds = (min = 1.5, max = 3.5): number => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

export const generateBetCount = (): number => {
  return Math.floor(Math.random() * 1000);
};

export const generateId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 5);
};

export const generateBettingCard = (): BettingCard => {
  const sports = Object.keys(SPORTS_DATA);
  const sport = sports[Math.floor(Math.random() * sports.length)];
  const sportInfo = SPORTS_DATA[sport as keyof typeof SPORTS_DATA];
  
  const countries = [...sportInfo.countries];
  const firstIndex = Math.floor(Math.random() * countries.length);

  let secondIndex;
  do {
    secondIndex = Math.floor(Math.random() * countries.length);
  } while (secondIndex === firstIndex && countries.length > 1);
  
  const countryA = countries[firstIndex];
  const countryB = countries[secondIndex];

  const homeOdds = generateOdds(1.5, 2.5);
  const awayOdds = generateOdds(2.0, 3.0);

  const homeBets = generateBetCount();

  let awayBets;
  do {
    awayBets = generateBetCount();
  } while (awayBets === homeBets);

  return {
    id: generateId(),
    homeTeam: countryA,
    awayTeam: countryB,
    homeOdds,
    awayOdds,
    homeBets,
    awayBets,
  };
};
