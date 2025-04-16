import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.main`
  padding: ${({ theme }) => `${theme.padding.md} ${theme.padding.xl}`};
`;
