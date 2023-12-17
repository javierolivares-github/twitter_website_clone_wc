import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class MenuIcon extends LitElement {
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
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 9C2.25 8.17157 2.92157 7.5 3.75 7.5C4.57843 7.5 5.25 8.17157 5.25 9C5.25 9.82843 4.57843 10.5 3.75 10.5C2.92157 10.5 2.25 9.82843 2.25 9ZM7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9ZM12.75 9C12.75 8.17157 13.4216 7.5 14.25 7.5C15.0784 7.5 15.75 8.17157 15.75 9C15.75 9.82843 15.0784 10.5 14.25 10.5C13.4216 10.5 12.75 9.82843 12.75 9Z" fill="black"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('menu-icon', MenuIcon);