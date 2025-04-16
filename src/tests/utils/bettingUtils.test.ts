import { describe, it, expect, vi } from 'vitest';
import {
  generateOdds,
  generateBetCount,
  generateId,
  generateBettingCard
} from '../../utils/bettingUtils';
import { SPORTS_DATA } from '../../constants/sports';

describe('betting utils', () => {
  describe('generateOdds', () => {
    it('should generate odds within the given range', () => {
      const odds = generateOdds(1.5, 3.5);
      expect(odds).toBeGreaterThanOrEqual(1.5);
      expect(odds).toBeLessThanOrEqual(3.5);
    });

    it('should use default min and max if not provided', () => {
      const odds = generateOdds();
      expect(odds).toBeGreaterThanOrEqual(1.5);
      expect(odds).toBeLessThanOrEqual(3.5);
    });
  });

  describe('generateBetCount', () => {
    it('should generate a bet count between 0 and 999', () => {
      const count = generateBetCount();
      expect(count).toBeGreaterThanOrEqual(0);
      expect(count).toBeLessThanOrEqual(999);
    });
  });

  describe('generateId', () => {
    it('should generate a unique id', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toEqual(id2);
    });

    it('should generate a string', () => {
      const id = generateId();
      expect(typeof id).toBe('string');
    });
  });

  describe('generateBettingCard', () => {
    it('should generate a valid betting card object', () => {
      const mockDate = new Date(2023, 0, 1).getTime();
      vi.spyOn(Date, 'now').mockImplementation(() => mockDate);
      
      const card = generateBettingCard();
      
      expect(card).toHaveProperty('id');
      expect(card).toHaveProperty('homeTeam');
      expect(card).toHaveProperty('awayTeam');
      expect(card).toHaveProperty('homeOdds');
      expect(card).toHaveProperty('awayOdds');
      expect(card).toHaveProperty('homeBets');
      expect(card).toHaveProperty('awayBets');
      
      // Check teams are from the constants
      const allTeams = [
        ...SPORTS_DATA.basketball.countries,
        ...SPORTS_DATA.football.countries,
        ...SPORTS_DATA.tennis.countries
      ];
      
      expect(allTeams).toContain(card.homeTeam);
      expect(allTeams).toContain(card.awayTeam);
      
      // Check odds and bets are numbers
      expect(typeof card.homeOdds).toBe('number');
      expect(typeof card.awayOdds).toBe('number');
      expect(typeof card.homeBets).toBe('number');
      expect(typeof card.awayBets).toBe('number');
    });
  });
}); 