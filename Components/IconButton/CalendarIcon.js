import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class CalendarIcon extends LitElement {
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
          <g clip-path="url(#clip0_499_875)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.625 7.96002C9.07501 7.96002 6.97501 10.06 6.97501 12.61C6.97501 15.16 9.07501 17.26 11.625 17.26C14.175 17.26 16.275 15.16 16.275 12.61C16.275 10.06 14.175 7.96002 11.625 7.96002ZM11.625 16.21C9.67501 16.21 8.10001 14.635 8.10001 12.685C8.10001 10.735 9.67501 9.16002 11.625 9.16002C13.575 9.16002 15.15 10.735 15.15 12.685C15.15 14.56 13.575 16.21 11.625 16.21ZM13.5 1.81002H12.525V1.58502C12.525 1.28502 12.3 0.985016 11.925 0.985016C11.625 0.985016 11.325 1.21002 11.325 1.58502V1.81002H5.77501V1.58502C5.77501 1.28502 5.55001 0.985016 5.17501 0.985016C4.87501 0.985016 4.57501 1.21002 4.57501 1.58502V1.81002H3.60001C2.55001 1.81002 1.72501 2.63502 1.72501 3.68502V13.51C1.72501 14.56 2.55001 15.385 3.60001 15.385H5.77501C6.07501 15.385 6.37501 15.16 6.37501 14.785C6.37501 14.485 6.15001 14.185 5.77501 14.185H3.60001C3.15001 14.185 2.85001 13.81 2.85001 13.435V6.08502C2.85001 5.86002 3.15001 5.56002 3.60001 5.56002H13.5C13.95 5.56002 14.25 5.86002 14.25 6.08502V7.43502C14.25 7.73502 14.475 8.03502 14.85 8.03502C15.15 8.03502 15.45 7.81002 15.45 7.43502V3.68502C15.375 2.63502 14.55 1.81002 13.5 1.81002ZM14.175 14.185C14.1 14.335 13.875 14.485 13.725 14.485C13.65 14.485 13.5 14.485 13.425 14.41L11.1 12.91V10.66C11.1 10.36 11.325 10.06 11.7 10.06C12 10.06 12.3 10.285 12.3 10.66V12.31L14.1 13.435C14.25 13.585 14.325 13.885 14.175 14.185ZM14.25 4.58502C14.025 4.51002 13.725 4.43502 13.5 4.43502H3.60001C3.30001 4.43502 3.07501 4.51002 2.85001 4.58502V3.68502C2.85001 3.23502 3.22501 2.93502 3.60001 2.93502H4.57501V3.31002C4.57501 3.61002 4.80001 3.91002 5.17501 3.91002C5.47501 3.91002 5.77501 3.68502 5.77501 3.31002V2.93502H11.4V3.31002C11.4 3.61002 11.625 3.91002 12 3.91002C12.3 3.91002 12.6 3.68502 12.6 3.31002V2.93502H13.5C13.95 2.93502 14.25 3.31002 14.25 3.68502V4.58502Z" fill="#1092EF"/>
          </g>
          <defs>
          <clipPath id="clip0_499_875">
          <rect width="18" height="18" fill="white" transform="translate(0 0.160004)"/>
          </clipPath>
          </defs>
        </svg>
      </div>
    `;
  };

};

customElements.define('calendar-icon', CalendarIcon);