import { css } from '../../lit.js';

const SuccessStyles = css`
  /* Light Theme */
  :host(.success) svg path {
    fill: var(--success-35);
  }

  :host(.success) {
    color: var(--success-35);
    background-color: var(--transparent-0);
  }

  :host(.success:hover) {
    background-color: var(--success-98);
  }

  :host(.success.active) {
    background-color: var(--success-95);
  }

  /* Dark Theme */
  :host(.successDark) svg path {
    fill: var(--success-60);
  }

  :host(.successDark) {
    color: var(--success-60);
    background-color: var(--transparent-0);
  }

  :host(.successDark:hover) {
    background-color: var(--transparent-10);
  }

  :host(.successDark.active) {
    background-color: var(--transparent-25);
  }
`;

export default SuccessStyles;