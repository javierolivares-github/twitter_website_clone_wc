import { css } from '../../lit.js';

const PrimaryStyles = css`
  /* Light Theme */
  :host(.primary) svg path {
    fill: var(--primary-50);
  }

  :host(.primary) {
    color: var(--primary-50);
    background-color: var(--transparent-0);
  }

  :host(.primary:hover) {
    background-color: var(--primary-98);
  }

  :host(.primary.active) {
    background-color: var(--primary-95);
  }

  /* Dark Theme */
  :host(.primaryDark) svg path {
    fill: var(--primary-70);
  }

  :host(.primaryDark) {
    color: var(--primary-70);
    background-color: var(--transparent-0);
  }

  :host(.primaryDark:hover) {
    background-color: var(--transparent-10);
  }

  :host(.primaryDark.active) {
    background-color: var(--transparent-25);
  }
`;

export default PrimaryStyles;