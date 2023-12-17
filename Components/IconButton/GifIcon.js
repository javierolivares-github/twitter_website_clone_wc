import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class GifIcon extends LitElement {
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
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.375 1.67502H2.625C1.695 1.67502 0.9375 2.43027 0.9375 3.36027V14.9905C0.9375 15.919 1.695 16.675 2.625 16.675H15.375C16.305 16.675 17.0625 15.919 17.0625 14.9905V3.36027C17.0625 2.43027 16.305 1.67502 15.375 1.67502ZM15.9375 14.9905C15.9375 15.298 15.6855 15.55 15.375 15.55H2.625C2.3145 15.55 2.0625 15.298 2.0625 14.9905V3.36027C2.0625 3.05127 2.3145 2.80002 2.625 2.80002H15.375C15.6855 2.80002 15.9375 3.05127 15.9375 3.36027V14.9905ZM14.25 8.03502V6.76002H10.95V11.56H12.225V10.06H13.725V8.78502H12.225V8.03502H14.25ZM8.775 6.76002H10.05V11.56H8.775V6.76002ZM6.075 7.96002C6.375 7.96002 6.75 8.11002 6.975 8.33502L7.875 7.58502C7.425 7.06002 6.75 6.76002 6.075 6.76002C4.725 6.76002 3.675 7.81002 3.675 9.16002C3.675 10.51 4.725 11.56 6.075 11.56C6.825 11.56 7.425 11.26 7.875 10.735V8.86002H5.775V9.76002H6.675V10.21C6.525 10.285 6.3 10.36 6.075 10.36C5.4 10.36 4.875 9.83502 4.875 9.16002C4.875 8.56002 5.4 7.96002 6.075 7.96002Z" fill="#1092EF"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('gif-icon', GifIcon);