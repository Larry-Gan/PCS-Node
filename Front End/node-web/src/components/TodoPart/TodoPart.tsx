import styled, { css, DefaultTheme } from 'styled-components';
import { Col } from 'src/components';

interface TodoPartProps {
  bold?: boolean;
  center?: boolean;
  border?: boolean;
  theme?: DefaultTheme;
}

export const TodoPart = styled(Col)`
  font-weight: ${({ bold }: TodoPartProps) => (bold ? 'bold' : 'normal')};
  justify-content: ${({ center }: TodoPartProps) =>
    center ? 'center' : 'left'};
  color: ${({ bold, theme }: TodoPartProps) =>
    bold && theme?.palette.primary.main};
  ${({ theme, border }: TodoPartProps) =>
    border &&
    css`
      border-bottom: solid 2px ${theme?.palette.secondary.main};
    `}
`;
