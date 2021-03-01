import { LitElement, html, css } from 'lit-element';

import { icons } from './icons';

/**
 * 
 * # <social-icon>
 * 
 * Web component to create social icons, based on LitElement.
 * 
 * The "icon" property is used to set the social network to display
 * 
 */

class TxmSocialIcon extends LitElement {
    
    static get properties() {
        return { 
          icon: { type: String }
        };
      }
    
      constructor() {
        super();
        this.icon = 'facebook';
      }
    
      static get styles() {
        return css`
          :host[hidden] { display: none; }
          :host { display: inline-block; }
          path {
            fill: var(--txm-social-icon-color, #888);
          }
          path[fill="none"] {
            fill: transparent;
          }
          svg {
            width: var(--txm-social-icon-size, 24px);
            height: var(--txm-social-icon-size, 24px);
          }
          div { display: flex;}
        `;
      }
    
      render() {
        return html`
        <div>
          ${this._getIcon(this.icon)}
        </div>
        `;
      }
    
      _getIcon(icon) {
        return icons[icon];
      }
}
customElements.define('txm-social-icon', TxmSocialIcon);