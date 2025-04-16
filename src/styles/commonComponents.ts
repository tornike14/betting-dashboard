import styled from "styled-components";
import { FlexProps } from "../types/styles/commonComponentsT";

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "flex-start"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  gap: ${({ gap, theme }) => gap || theme.spacing.md};
`;

export const Button = styled.button`
  max-width: 200px;
  padding: ${({ theme }) => theme.padding.md} ${({ theme }) => theme.padding.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.padding.xl};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.padding.md};
`;
