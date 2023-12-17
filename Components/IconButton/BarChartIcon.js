import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class BarChartIcon extends LitElement {
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
          <path d="M15.1673 7.03H14.166C14.1773 6.9625 14.187 6.8935 14.187 6.82225V5.0875C14.187 4.3525 13.5893 3.75475 12.8535 3.75475H2.625V2.6785C2.625 2.368 2.373 2.116 2.0625 2.116C1.752 2.116 1.5 2.368 1.5 2.6785V15.7825C1.5 16.0938 1.752 16.345 2.0625 16.345C2.373 16.345 2.625 16.0938 2.625 15.7825V14.707H10.542C11.277 14.707 11.8755 14.1092 11.8755 13.3742V11.6395C11.8755 11.5682 11.865 11.4992 11.8545 11.431H15.1673C15.9023 11.431 16.5008 10.8325 16.5008 10.0975V8.365C16.5008 7.62775 15.903 7.03 15.1673 7.03ZM12.855 4.87975C12.969 4.87975 13.0628 4.97275 13.0628 5.0875V6.82C13.0628 6.9355 12.969 7.03 12.8543 7.03H2.625V4.8775H12.855V4.87975ZM10.7498 11.6402V13.3742C10.7498 13.489 10.656 13.582 10.5413 13.582H2.625V11.431H10.542C10.6568 11.431 10.7498 11.5255 10.7498 11.641V11.6402ZM15.375 10.0975C15.375 10.2122 15.2813 10.3052 15.1665 10.3052H2.625V8.155H15.1665C15.2813 8.155 15.375 8.248 15.375 8.36275V10.0975Z" fill="#1092EF"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('barchart-icon', BarChartIcon);