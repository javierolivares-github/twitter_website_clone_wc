import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class LocationIcon extends LitElement {
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
          <path d="M15.519 8.1775C15.519 4.585 12.594 1.66 9.00001 1.66C5.40601 1.66 2.48101 4.585 2.48101 8.1775C2.48101 9.604 2.93326 10.9585 3.78826 12.0948L3.79051 12.0933L3.79576 12.1045C5.01676 13.657 8.50426 16.4223 8.65201 16.5385C8.75551 16.621 8.87851 16.6608 9.00076 16.6608C9.12301 16.6608 9.24601 16.621 9.34951 16.5393C9.49726 16.423 12.9848 13.6593 14.2058 12.1053L14.211 12.0948L14.2125 12.0963C15.0675 10.9593 15.519 9.60626 15.519 8.179V8.1775ZM9.00001 15.3775C8.08201 14.635 5.61001 12.5913 4.68301 11.4138C3.97801 10.4763 3.60601 9.35725 3.60601 8.17975C3.60601 5.20525 6.02626 2.785 9.00001 2.785C11.9738 2.785 14.394 5.2045 14.394 8.1775C14.394 9.355 14.0213 10.474 13.317 11.4123C12.39 12.5898 9.91801 14.6328 9.00001 15.376V15.3775ZM9.00001 10.8963C7.43401 10.8963 6.15976 9.62276 6.15976 8.05675C6.15976 6.49075 7.43476 5.215 9.00001 5.215C10.5653 5.215 11.8403 6.49 11.8403 8.05525C11.8403 9.62051 10.5653 10.894 9.00001 10.894V10.8963ZM9.00001 6.3415C8.05501 6.3415 7.28476 7.111 7.28476 8.05675C7.28476 9.00251 8.05501 9.77051 9.00001 9.77051C9.94501 9.77051 10.7153 9.00175 10.7153 8.056C10.7153 7.11025 9.94501 6.34 9.00001 6.34V6.3415Z" fill="#1092EF"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('location-icon', LocationIcon);