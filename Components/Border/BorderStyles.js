import { css } from "../../lit.js";

const BorderStyles = css`
  :host {
    display: flex;
  }

  :host(.default) svg rect {
    fill: var(--gray-95);
  }
  
  :host(.dark) svg rect {
    fill: var(--secondary-25);
  }


`;

export default BorderStyles;