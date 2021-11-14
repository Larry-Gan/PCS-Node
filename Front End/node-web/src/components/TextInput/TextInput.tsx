import styled from 'styled-components';

export const TextInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme?.palette?.common?.white};
  display: block;
  outline: none;
  padding: 0.5em;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme?.palette?.primary?.main};

  ::placeholder {
    color: ${({ theme }) => theme?.palette?.common?.gray};
  }
`;
