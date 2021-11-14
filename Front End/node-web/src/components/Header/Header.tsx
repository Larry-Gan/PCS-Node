import styled, { DefaultTheme } from 'styled-components';
//import oBold from '../../../public/assets/fonts/Oswald-Bold.ttf';

type HeaderColors = 'white' | 'black' | 'primary' | 'secondary';

interface BaseHeaderProps {
  color?: HeaderColors;
  underline?: HeaderColors;
  theme?: DefaultTheme;
}

const BaseHeader = styled.span`
  font-family: ${({ theme }) => theme?.text?.header};
  color: ${({ color, theme }: BaseHeaderProps) => {
    switch (color) {
      case 'white':
      case 'black':
        return (theme?.palette?.common || {})[color];
      default:
        return (theme?.palette || {})[color || 'primary']?.main;
    }
  }};
  text-decoration: ${({ underline, theme }: BaseHeaderProps) => {
    switch (underline) {
      case 'white':
      case 'black':
        return `underline ${(theme?.palette?.common || {})[underline]}`;
      case 'primary':
      case 'secondary':
        return `underline ${(theme?.palette || {})[underline]?.main}`;
    }
  }};
`;

const HeaderXl = BaseHeader.withComponent('h1');
const HeaderLg = BaseHeader.withComponent('h2');
const HeaderMd = BaseHeader.withComponent('h3');
const HeaderSm = BaseHeader.withComponent('h4');
const HeaderXs = BaseHeader.withComponent('h5');

export { HeaderXl, HeaderLg, HeaderMd, HeaderSm, HeaderXs };
