import { describe, it, expect } from 'vitest';
import reducer, { addCard, setCards } from '../../features/betting/bettingSlice';
import { BettingState } from '../../types/store/bettingSliceT';
import { BettingCard } from '../../types/components/common/bettingCardT';

describe('betting reducer', () => {
  const initialState: BettingState = {
    cards: []
  };

  const mockCard: BettingCard = {
    id: '123',
    homeTeam: 'Liverpool',
    awayTeam: 'Arsenal',
    homeOdds: 1.75,
    awayOdds: 2.25,
    homeBets: 1200,
    awayBets: 800
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({ cards: [] });
  });

  it('should handle addCard', () => {
    const actual = reducer(initialState, addCard(mockCard));
    expect(actual.cards.length).toEqual(1);
    expect(actual.cards[0]).toEqual(mockCard);
  });

  it('should handle setCards', () => {
    const mockCards = [mockCard, { ...mockCard, id: '456' }];
    const actual = reducer(initialState, setCards(mockCards));
    expect(actual.cards.length).toEqual(2);
    expect(actual.cards).toEqual(mockCards);
  });

  it('should not modify original state when adding cards', () => {
    const startState: BettingState = { cards: [] };
    reducer(startState, addCard(mockCard));
    expect(startState.cards).toEqual([]);
  });
}); 