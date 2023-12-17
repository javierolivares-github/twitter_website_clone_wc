import {LitElement, html} from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from './DropdownStyles.js';
import '../Styles/TypeStyle.js';

class DropdownSettings extends LitElement {
  static styles = [
    DropdownStyles,
    DefaultStyles,
    DarkStyles
  ];

  svgOutline() {
    return html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.36 22.375H11.638C10.455 22.375 9.48399 21.487 9.37599 20.311L9.36199 20.164C9.33699 19.877 9.15499 19.631 8.88999 19.52C8.60399 19.4 8.30799 19.455 8.09199 19.635L7.97599 19.732C7.10799 20.457 5.72299 20.395 4.91599 19.592L4.40599 19.082C3.56999 18.242 3.50999 16.928 4.26599 16.022L4.36399 15.904C4.54999 15.682 4.59399 15.381 4.48599 15.117C4.37599 14.845 4.12799 14.663 3.83999 14.637L3.68999 14.623C2.50999 14.516 1.62299 13.543 1.62299 12.361V11.639C1.62299 10.456 2.51099 9.485 3.68699 9.377L3.84299 9.363C4.12799 9.338 4.37299 9.156 4.48499 8.89C4.59499 8.62 4.54999 8.317 4.36499 8.095L4.27099 7.979C3.51399 7.071 3.57299 5.756 4.40799 4.919L4.91999 4.407C5.72399 3.603 7.10799 3.542 7.97999 4.267L8.09599 4.365C8.31399 4.549 8.62399 4.595 8.88599 4.487C9.15599 4.375 9.33799 4.129 9.36299 3.844L9.37699 3.691C9.48399 2.511 10.457 1.625 11.639 1.625H12.361C13.544 1.625 14.515 2.513 14.623 3.689L14.637 3.845C14.662 4.13 14.843 4.375 15.109 4.485C15.386 4.602 15.689 4.547 15.903 4.368L16.023 4.266C16.89 3.543 18.277 3.604 19.083 4.406L19.593 4.918C20.429 5.756 20.489 7.071 19.733 7.978L19.633 8.096C19.445 8.316 19.399 8.618 19.51 8.884C19.622 9.154 19.87 9.334 20.156 9.362L20.308 9.376C21.488 9.483 22.375 10.456 22.375 11.638V12.361C22.375 13.544 21.487 14.515 20.311 14.623L20.156 14.637C19.872 14.661 19.626 14.842 19.516 15.107C19.403 15.379 19.449 15.681 19.633 15.902L19.733 16.022C20.489 16.927 20.429 18.242 19.593 19.082L19.083 19.592C18.276 20.396 16.893 20.456 16.023 19.732L15.908 19.636C15.691 19.453 15.378 19.406 15.118 19.514C14.845 19.628 14.663 19.874 14.638 20.16L14.624 20.31C14.517 21.483 13.544 22.37 12.362 22.37L12.36 22.375ZM8.58699 17.955C8.88699 17.955 9.17999 18.015 9.45699 18.13C10.247 18.458 10.781 19.184 10.857 20.026L10.871 20.173C10.908 20.573 11.238 20.873 11.641 20.873H12.363C12.763 20.873 13.093 20.573 13.131 20.173L13.145 20.025C13.221 19.183 13.755 18.458 14.537 18.133C15.33 17.803 16.233 17.951 16.87 18.483L16.983 18.577C17.161 18.725 17.349 18.757 17.476 18.757C17.682 18.757 17.876 18.677 18.022 18.53L18.532 18.02C18.816 17.736 18.837 17.29 18.58 16.982L18.48 16.862C17.938 16.212 17.803 15.322 18.128 14.539C18.454 13.749 19.18 13.219 20.022 13.142L20.177 13.128C20.574 13.091 20.877 12.761 20.877 12.358V11.636C20.877 11.236 20.574 10.906 20.175 10.868L20.023 10.854C19.177 10.776 18.453 10.244 18.128 9.461C17.802 8.673 17.938 7.783 18.481 7.134L18.581 7.016C18.838 6.706 18.817 6.26 18.533 5.976L18.023 5.466C17.877 5.319 17.683 5.239 17.477 5.239C17.35 5.239 17.162 5.271 16.985 5.419L16.865 5.519C16.231 6.047 15.315 6.189 14.543 5.873C13.755 5.546 13.223 4.821 13.146 3.977L13.132 3.822C13.097 3.425 12.767 3.122 12.365 3.122H11.642C11.242 3.122 10.912 3.425 10.874 3.824L10.86 3.976C10.784 4.819 10.252 5.544 9.46999 5.869C8.68299 6.195 7.77699 6.052 7.13999 5.519L7.02199 5.423C6.84199 5.273 6.65399 5.243 6.52699 5.243C6.32099 5.243 6.12699 5.323 5.98099 5.469L5.46899 5.979C5.18699 6.263 5.16599 6.709 5.42299 7.017L5.52299 7.135C6.06299 7.788 6.19999 8.679 5.87499 9.46C5.54799 10.248 4.82299 10.78 3.97999 10.857L3.82399 10.871C3.42699 10.908 3.12399 11.238 3.12399 11.641V12.363C3.12399 12.763 3.42699 13.093 3.82599 13.131L3.97599 13.145C4.82399 13.223 5.54899 13.757 5.87299 14.541C6.19799 15.327 6.06299 16.216 5.51999 16.866L5.42399 16.981C5.16399 17.291 5.18599 17.737 5.46999 18.021L5.97999 18.531C6.12599 18.678 6.31999 18.758 6.52599 18.758C6.65299 18.758 6.84099 18.728 7.01799 18.578L7.13399 18.482C7.53999 18.146 8.05699 17.958 8.58699 17.958V17.955ZM12 8.21C9.90999 8.21 8.20999 9.91 8.20999 12C8.20999 14.09 9.90999 15.79 12 15.79C14.09 15.79 15.79 14.09 15.79 12C15.79 9.91 14.09 8.21 12 8.21ZM12 14.29C10.738 14.29 9.70999 13.264 9.70999 12C9.70999 10.736 10.74 9.71 12 9.71C13.26 9.71 14.29 10.736 14.29 12C14.29 13.264 13.262 14.29 12 14.29Z" fill="#172936"/>
      </svg>
    `;
  };

  render() {
    return html`
      <div>
        ${this.svgOutline()}
        <type-style class="size-20px regular">Configuraciones</type-style>
      </div>          
    `;
  };
}


customElements.define('dropdown-settings', DropdownSettings);