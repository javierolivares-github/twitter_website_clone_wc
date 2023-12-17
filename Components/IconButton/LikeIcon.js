import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class LikeIcon extends LitElement {
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
          <path d="M9.00001 16.2285H8.98951C7.05226 16.1925 1.46251 11.142 1.46251 6.35847C1.46251 4.06047 3.35626 2.04297 5.51476 2.04297C7.23226 2.04297 8.38726 3.22797 8.99926 4.09047C9.60976 3.22947 10.7648 2.04297 12.483 2.04297C14.643 2.04297 16.536 4.06047 16.536 6.35922C16.536 11.1412 10.9455 16.1917 9.00826 16.227H9.00001V16.2285ZM5.51551 3.16872C3.95551 3.16872 2.58826 4.65972 2.58826 6.35997C2.58826 10.665 7.86376 15.057 9.00076 15.1035C10.1393 15.057 15.4133 10.6657 15.4133 6.35997C15.4133 4.65972 14.046 3.16872 12.486 3.16872C10.59 3.16872 9.53101 5.37072 9.52201 5.39247C9.34951 5.81397 8.65501 5.81397 8.48176 5.39247C8.47126 5.36997 7.41301 3.16872 5.51626 3.16872H5.51551Z" fill="#666666"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('like-icon', LikeIcon);