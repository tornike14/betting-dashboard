import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBg};
  opacity: 0.8;
  padding: ${({ theme }) => `${theme.padding.md} ${theme.padding.xl}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.img`
  width: 115px;
  height: auto;
  display: flex;
  align-items: center;
  vertical-align: middle;
`;

export const LiteBadge = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => `${theme.padding.xs} ${theme.padding.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;
