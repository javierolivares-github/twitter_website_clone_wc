import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class UploadIcon extends LitElement {
  static styles = [
    DefaultStyles,
    DarkStyles,
    GrayStyles,
    PrimaryStyles,
    AlertStyles,
    SuccessStyles, 
    SidebarButtonStyles,
  ];

  render () {
    return html`
      <div>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.781 16.4581H3.21901C2.27101 16.4581 1.50001 15.6871 1.50001 14.7391V10.5001C1.50001 10.1896 1.75201 9.93756 2.06251 9.93756C2.37301 9.93756 2.62501 10.1896 2.62501 10.5001V14.7391C2.62501 15.0668 2.89126 15.3331 3.21901 15.3331H14.781C15.1088 15.3331 15.375 15.0668 15.375 14.7391V10.5001C15.375 10.1896 15.627 9.93756 15.9375 9.93756C16.248 9.93756 16.5 10.1896 16.5 10.5001V14.7391C16.5 15.6871 15.729 16.4581 14.781 16.4581ZM13.1475 5.60256L9.39751 1.85256C9.17776 1.63281 8.82151 1.63281 8.60251 1.85256L4.85251 5.60256C4.63201 5.82231 4.63201 6.17856 4.85251 6.39756C5.07301 6.61656 5.42776 6.61806 5.64751 6.39756L8.43751 3.60756V11.2501C8.43751 11.5606 8.68951 11.8126 9.00001 11.8126C9.31051 11.8126 9.56251 11.5606 9.56251 11.2501V3.60756L12.3525 6.39756C12.462 6.50781 12.606 6.56256 12.75 6.56256C12.894 6.56256 13.038 6.50856 13.1475 6.39756C13.3673 6.17781 13.3673 5.82231 13.1475 5.60256Z" fill="#666666"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('upload-icon', UploadIcon);