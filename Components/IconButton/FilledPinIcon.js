import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class FilledPinIcon extends LitElement {
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.235 14.61C19.86 12.865 17.893 11.104 16.225 10.485L15.681 5.537L17.176 3.295C17.333 3.059 17.348 2.757 17.213 2.508C17.079 2.258 16.821 2.105 16.538 2.105H7.39798C7.11398 2.105 6.85598 2.259 6.72198 2.508C6.58798 2.758 6.60198 3.061 6.75998 3.296L8.25798 5.543L7.77398 10.486C6.10598 11.106 4.14098 12.866 3.76998 14.602C3.72998 14.762 3.75398 15.006 3.90198 15.196C4.00498 15.328 4.20598 15.486 4.58198 15.486H8.63998L11.544 22.198C11.622 22.382 11.804 22.5 12.002 22.5C12.2 22.5 12.382 22.382 12.462 22.198L15.365 15.485H19.422C19.798 15.485 19.998 15.329 20.102 15.199C20.248 15.011 20.274 14.765 20.237 14.609L20.235 14.61Z" fill="#666666"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('filledpin-icon', FilledPinIcon);