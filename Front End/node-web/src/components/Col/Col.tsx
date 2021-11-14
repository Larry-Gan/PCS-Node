import styled from 'styled-components';
import { addGridSpan } from 'src/components/responsive';

export const Col = styled.div`
  display: flex;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  padding: 0.25em;
  width: 100%;
  height: 100%;

  word-wrap: break-word;

  ${addGridSpan}
`;
