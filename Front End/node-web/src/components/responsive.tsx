import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

/* General media queries */
export const sizes: Record<string, number> = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 0,
};

type MediaFn = (
  arg1: TemplateStringsArray | CSSObject,
  ...args: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

export const media = Object.keys(sizes).reduce(
  (acc: Record<string, MediaFn>, label) => {
    acc[label] = (
      arg1: TemplateStringsArray | CSSObject,
      ...args: SimpleInterpolation[]
    ) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(arg1, ...args)}
      }
    `;
    return acc;
  },
  {} as Record<string, MediaFn>
);

/* Grid sizes */
const grid = (size: number | undefined) => `${((size || 12) / 12) * 100}%`;

export const gridCss = (gridSize: number, useDisplayGrid = false): string =>
  useDisplayGrid
    ? `grid-column: span ${gridSize};`
    : `width: ${grid(gridSize)};`;

const gridSizesToCss = (
  gridSizes: Record<string, number>,
  useDisplayGrid: boolean
) =>
  Object.entries(gridSizes)
    .sort((a, b) => sizes[a[0]] - sizes[b[0]])
    .map(
      ([mediaSize, gridSize]) =>
        media[mediaSize]`${gridCss(gridSize, useDisplayGrid)}`
    );

export interface GridProps {
  size?: Record<string, number>;
}

const gridSizeFn = (useDisplayGrid: boolean) => ({ size }: GridProps) =>
  size
    ? css`
        ${gridSizesToCss(size, useDisplayGrid)}
      `
    : media.xs`${gridCss(12, useDisplayGrid)}`;

export const addGridWidth = gridSizeFn(false);
export const addGridSpan = gridSizeFn(true);
