import { LitElement, html, css } from '../../lit.js';
import ButtonBaseStyles from './ButtonBaseStyles.js';
import ButtonSizeStyles from './ButtonSizeStyles.js';
import ButtonThemes from './ButtonThemes.js';

class PrimaryButton extends LitElement {
  static styles = [ButtonBaseStyles, ButtonSizeStyles, ButtonThemes];

  static properties = {
    buttonLabel: {type: String, attribute: 'label'}
  };

  constructor () {
    super();
    this.buttonLabel = "Default Value" 
  };

  render () {
    return html`
      <div label=${this.buttonLabel}>
        ${this.buttonLabel}
      </div>
    `
  };
}

customElements.define('primary-button', PrimaryButton);