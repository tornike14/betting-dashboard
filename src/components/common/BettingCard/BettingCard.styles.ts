import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.padding.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const Teams = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.xl};
  font-weight: bold;
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  span:first-child {
    text-align: right;
  }
  
  span:last-child {
    text-align: left;
  }
`;

export const Odds = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.xl};
  font-size: 1.1rem;
  
  span:first-child, span:last-child {
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    display: inline-block;
    min-width: 60px;
    text-align: center;
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
  
  span:first-child {
    margin-left: auto;
  }
  
  span:last-child {
    margin-right: auto;
  }
  
  span[aria-hidden="true"] {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
    font-weight: normal;
  }
`;

export const Bets = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  
  span:first-child {
    text-align: right;
  }
  
  span:last-child {
    text-align: left;
  }
`;
