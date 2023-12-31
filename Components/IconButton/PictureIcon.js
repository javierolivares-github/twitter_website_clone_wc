import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class PictureIcon extends LitElement {
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
          <path d="M14.8125 1.5H3.1875C2.2575 1.5 1.5 2.2575 1.5 3.1875V14.8125C1.5 15.7425 2.2575 16.5 3.1875 16.5H14.8125C15.7425 16.5 16.5 15.7425 16.5 14.8125V3.1875C16.5 2.2575 15.7425 1.5 14.8125 1.5ZM2.6295 14.835L6.693 10.6845L11.4045 15.375H3.1875C2.886 15.375 2.64225 15.1335 2.6295 14.835ZM14.8125 15.375H12.9975L9.24225 11.6347L12.0862 8.74725L15.375 12.0353V14.8125C15.375 15.1222 15.1222 15.375 14.8125 15.375ZM3.1875 2.625H14.8125C15.1222 2.625 15.375 2.87775 15.375 3.1875V10.4445L12.4815 7.551C12.3765 7.446 12.234 7.386 12.084 7.386H12.0817C11.9317 7.386 11.787 7.446 11.6827 7.554L8.445 10.842L7.08525 9.4875C6.98025 9.3825 6.83775 9.3225 6.68775 9.3225C6.543 9.3 6.3915 9.3825 6.2865 9.49275L2.625 13.2315V3.1875C2.625 2.87775 2.87775 2.625 3.1875 2.625ZM6.651 7.38825C7.29 7.38825 7.8075 6.87075 7.8075 6.23175C7.8075 5.59275 7.29 5.07525 6.651 5.07525C6.012 5.07525 5.4945 5.59275 5.4945 6.23175C5.4945 6.87075 6.012 7.38825 6.651 7.38825Z" fill="#1D98F0"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('picture-icon', PictureIcon);