import { css } from '../../lit.js';

const GrayStyles = css`
  /* Light Theme */
  :host(.gray) svg path {
    fill: var(--gray-40);
  }

  :host(.gray) {
    color: var(--gray-40);
    background-color: var(--transparent-0);
  }

  :host(.gray:hover) {
    background-color: var(--gray-98);
  }

  :host(.gray.active) {
    background-color: var(--gray-95);
  }

  /* Light Theme */
  :host(.grayDark) svg path {
    fill: var(--gray-100);
  }

  :host(.grayDark) {
    color: var(--gray-100);
    background-color: var(--transparent-0);
  }

  :host(.grayDark:hover) {
    background-color: var(--transparent-10);
  }

  :host(.grayDark.active) {
    background-color: var(--transparent-25);
  }
`;

export default GrayStyles;