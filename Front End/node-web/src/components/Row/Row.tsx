import styled from 'styled-components';
import { media } from 'src/components/responsive';

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0.5em;

  justify-content: center;
  margin: 1em;
  max-width: 100%;

  ${media.xl`
        flex-wrap: nowrap;
    `}
`;
