import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: white;
  color: ${({ theme }) => theme?.palette?.primary?.main};
  font-size: 1em;
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;

  ${({ theme, disabled }) =>
    disabled
      ? css`
          color: ${theme?.palette?.common?.gray};
        `
      : css`
          &:hover {
            opacity: 70%;
            cursor: pointer;
          }
        `}
`;
