import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class CommentIcon extends LitElement {
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
          <path d="M10.5345 1.68145L7.42201 1.67395C4.14151 1.67395 1.57201 4.2442 1.57201 7.52545C1.57201 10.599 3.96151 12.93 7.17076 13.053V15.924C7.17076 16.005 7.20376 16.1385 7.26076 16.2262C7.36726 16.395 7.54876 16.4865 7.73476 16.4865C7.83826 16.4865 7.94251 16.458 8.03626 16.398C8.23426 16.272 12.891 13.293 14.1023 12.2685C15.5288 11.061 16.3823 9.29095 16.3845 7.53445V7.5217C16.38 4.24645 13.812 1.68145 10.5345 1.6807V1.68145ZM13.3748 11.4105C12.5243 12.1305 9.72826 13.9642 8.29576 14.8927V12.5025C8.29576 12.192 8.04451 11.94 7.73326 11.94H7.43626C4.69126 11.94 2.69776 10.083 2.69776 7.52545C2.69776 4.87495 4.77376 2.79895 7.42276 2.79895L10.5345 2.80645C13.1835 2.80645 15.2595 4.88095 15.261 7.52845C15.2588 8.96095 14.5545 10.4115 13.3755 11.4105H13.3748Z" fill="#666666"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('comment-icon', CommentIcon);