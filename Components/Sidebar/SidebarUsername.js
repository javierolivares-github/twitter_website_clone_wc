import { LitElement, html } from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarUsernameStyles from './SidebarUsernameStyles.js';
import '../Styles/TypeStyle.js';

class SidebarUsename extends LitElement {
  static styles = [SidebarUsernameStyles, DefaultStyles, DarkStyles];

  static properties = {
    image: {type: String, attribute: 'image'},
    username: {type: String, attribute: 'username'},
    account: {type: String, attribute: 'account'},
  };

  constructor () {
    super();
    this.image = "./images/profile.png";
    this.username = "Username";
    this.account = "@account";
  };

  svgfilled () {
    return html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z" fill="black"/>
      </svg>
    `;
  }

  render () {
    return html`
      <div image=${this.image} username=${this.username} account=${this.account}>
        <img src=${this.image} alt="Profile image" width="40"/>
        <section>
          <type-style class="size-16x bold">${this.username}</type-style>
          <type-style class="size-14px regular">${this.account}</type-style>
        </section>
        ${this.svgfilled()}
      </div>
    `;
  };
};

customElements.define('sidebar-username', SidebarUsename);