import { LitElement, html } from '../../lit.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DarkStyles from '../Styles/DarkStyles.js';
import GrayStyles from '../Styles/GrayStyles.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import AlertStyles from '../Styles/AlertStyles.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class ReTweetIcon extends LitElement {
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
          <path d="M17.8275 11.7526C17.6085 11.5328 17.2522 11.5328 17.0325 11.7526L15.3675 13.4176V5.73756C15.3675 4.18656 14.1052 2.92506 12.555 2.92506H8.1675C7.857 2.92506 7.605 3.17706 7.605 3.48756C7.605 3.79806 7.857 4.05006 8.1675 4.05006H12.555C13.485 4.05006 14.2425 4.80756 14.2425 5.73756V13.4176L12.5775 11.7526C12.3577 11.5328 12.0015 11.5328 11.7825 11.7526C11.5635 11.9723 11.562 12.3286 11.7825 12.5476L14.4075 15.1726C14.5162 15.2828 14.6602 15.3376 14.805 15.3376C14.9497 15.3376 15.0922 15.2836 15.2025 15.1726L17.8275 12.5476C18.048 12.3286 18.048 11.9723 17.8275 11.7526ZM9.834 14.2126H5.445C4.515 14.2126 3.7575 13.4551 3.7575 12.5251V4.84506L5.4225 6.51006C5.5335 6.62031 5.6775 6.67506 5.8215 6.67506C5.9655 6.67506 6.1095 6.62031 6.219 6.51006C6.43875 6.29031 6.43875 5.93406 6.219 5.71506L3.594 3.09006C3.37425 2.86956 3.018 2.86956 2.799 3.09006L0.173996 5.71506C-0.0465038 5.93406 -0.0465038 6.29031 0.173996 6.51006C0.394496 6.72981 0.749246 6.72981 0.968996 6.51006L2.634 4.84506V12.5251C2.634 14.0761 3.89625 15.3376 5.4465 15.3376H9.834C10.1445 15.3376 10.3965 15.0856 10.3965 14.7751C10.3965 14.4646 10.1437 14.2126 9.834 14.2126Z" fill="#666666"/>
        </svg>
      </div>
    `;
  };

};

customElements.define('retweet-icon', ReTweetIcon);