import styled from 'styled-components';
import { Container } from 'src/components';

export const TodoBox = styled(Container)`
  padding-left: 2em;
  padding-right: 2em;
  box-shadow: 3px 3px ${({ theme }) => theme?.palette?.common?.gray};
  border: 1px solid ${({ theme }) => theme?.palette?.common?.gray};
`;
