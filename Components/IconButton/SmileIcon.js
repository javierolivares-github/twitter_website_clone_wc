import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class SmileIcon extends LitElement {
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
          <path d="M9 17.2225C4.554 17.2225 0.9375 13.606 0.9375 9.16C0.9375 4.714 4.554 1.0975 9 1.0975C13.446 1.0975 17.0625 4.714 17.0625 9.16C17.0625 13.606 13.446 17.2225 9 17.2225ZM9 2.2225C5.175 2.2225 2.0625 5.335 2.0625 9.16C2.0625 12.985 5.175 16.0975 9 16.0975C12.825 16.0975 15.9375 12.985 15.9375 9.16C15.9375 5.335 12.825 2.2225 9 2.2225ZM9 12.9963C7.581 12.9963 6.27525 12.2838 5.508 11.0883C5.34 10.8273 5.41575 10.4808 5.6775 10.312C5.9385 10.1425 6.2865 10.219 6.4545 10.4815C7.01475 11.353 7.9665 11.8728 9.00075 11.8728C10.035 11.8728 10.9868 11.353 11.5478 10.4823C11.7158 10.2198 12.0638 10.1448 12.3248 10.3135C12.5873 10.4815 12.6623 10.8295 12.4943 11.0905C11.7255 12.286 10.4198 12.9993 9.00075 12.9993L9 12.9963ZM6.9465 8.362C7.5585 8.362 8.055 7.8655 8.055 7.2535C8.055 6.6415 7.5585 6.145 6.9465 6.145C6.3345 6.145 5.838 6.6415 5.838 7.2535C5.838 7.8655 6.3345 8.362 6.9465 8.362ZM11.0535 8.362C11.6655 8.362 12.162 7.8655 12.162 7.2535C12.162 6.6415 11.6655 6.145 11.0535 6.145C10.4415 6.145 9.945 6.6415 9.945 7.2535C9.945 7.8655 10.4415 8.362 11.0535 8.362Z" fill="#1092EF"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('smile-icon', SmileIcon);