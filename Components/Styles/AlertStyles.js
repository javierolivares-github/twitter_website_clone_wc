import { css } from '../../lit.js';

const AlertStyles = css`
  /* Light Theme */
  :host(.alert) svg path {
    fill: var(--alert-50);
  }

  :host(.alert) {
    color: var(--alert-50);
    background-color: var(--transparent-0);
  }

  :host(.alert:hover) {
    background-color: var(--alert-98);
  }

  :host(.alert.active) {
    background-color: var(--alert-95);
  }

  /* Dark Theme */
  :host(.alertDark) svg path {
    fill: var(--alert-70);
  }

  :host(.alertDark) {
    color: var(--alert-70);
    background-color: var(--transparent-0);
  }

  :host(.alertDark:hover) {
    background-color: var(--transparent-10);
  }

  :host(.alertDark.active) {
    background-color: var(--transparent-25);
  }
`;

export default AlertStyles;