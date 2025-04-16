import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BettingCard from '../../components/common/BettingCard';
import { BettingCard as BettingCardType } from '../../types/components/common/bettingCardT';
import { render } from '../utils/test-utils';

describe('BettingCard Component', () => {
  const mockCard: BettingCardType = {
    id: '123',
    homeTeam: 'Liverpool',
    awayTeam: 'Arsenal',
    homeOdds: 1.75,
    awayOdds: 2.25,
    homeBets: 1200,
    awayBets: 800
  };

  it('renders team names correctly', () => {
    render(<BettingCard card={mockCard} />);
    
    expect(screen.getByText('Liverpool')).toBeInTheDocument();
    expect(screen.getByText('Arsenal')).toBeInTheDocument();
    expect(screen.getAllByText('vs').length).toBeGreaterThanOrEqual(1);
  });

  it('displays correct odds', () => {
    render(<BettingCard card={mockCard} />);
    
    expect(screen.getByLabelText('Liverpool odds')).toHaveTextContent('1.75');
    expect(screen.getByLabelText('Arsenal odds')).toHaveTextContent('2.25');
  });

  it('displays correct bet counts', () => {
    render(<BettingCard card={mockCard} />);
    
    expect(screen.getByLabelText('Liverpool bets')).toHaveTextContent('1200 bets');
    expect(screen.getByLabelText('Arsenal bets')).toHaveTextContent('800 bets');
  });
});