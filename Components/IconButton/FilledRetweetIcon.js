import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class FilledRetweetIcon extends LitElement {
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
          <path d="M12.562 18.5H7.362C6.508 18.5 5.812 17.805 5.812 16.95V7.547L7.138 8.873C7.372 9.108 7.68 9.225 7.986 9.225C8.292 9.225 8.6 9.108 8.836 8.873C9.304 8.403 9.304 7.643 8.836 7.176L5.46 3.8C4.99 3.332 4.23 3.332 3.763 3.8L0.388 7.177C-0.0820004 7.647 -0.0820004 8.407 0.388 8.874C0.858 9.341 1.618 9.344 2.085 8.874L3.41 7.547V16.95C3.41 19.128 5.183 20.9 7.36 20.9H12.56C13.224 20.9 13.76 20.362 13.76 19.7C13.76 19.038 13.225 18.5 12.562 18.5ZM23.615 15.477C23.145 15.007 22.385 15.007 21.918 15.477L20.592 16.803V7.4C20.592 5.222 18.82 3.45 16.642 3.45H11.442C10.779 3.45 10.242 3.988 10.242 4.65C10.242 5.312 10.779 5.85 11.442 5.85H16.642C17.496 5.85 18.192 6.545 18.192 7.4V16.803L16.866 15.477C16.396 15.007 15.636 15.007 15.169 15.477C14.702 15.947 14.699 16.707 15.169 17.174L18.543 20.549C18.777 20.782 19.085 20.899 19.393 20.899C19.701 20.899 20.006 20.783 20.241 20.549L23.616 17.173C24.083 16.703 24.083 15.944 23.615 15.477ZM23.614 15.476L23.615 15.477L23.614 15.476Z" fill="#666666"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('filledretweet-icon', FilledRetweetIcon);