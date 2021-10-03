import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      .button-wrapper {
        display: block;
        text-align: center;
      }
      .cta-button {
        background-color: #bf40bf;
        color: #000;
        font-family: copperplate, fantasy;
      }
     
      .cta-button:hover,
      :focus {
        background-color: #cf9fff;
      }

      .button {
        border: dashed;
        border-radius: 50em;
        box-shadow: 50px 23px 20px rgba(0, 0, 0, 0.2);
        display: inline block;
        font-size: 2em;
        padding: 1em 2em;
        width: auto;
      }
      :host {
        display: block;
        padding: 400px;
        color: var(--cta-button-text-color, #000);
      }
    `;
  }

  
  static get properties() {
    return {
      buttonText: { Type: String },
      buttonLink: { Type: String },
      icon: { Type: String },
    };
  }

  
  constructor() {
    super();
    this.buttonText = 'Check out my channel!';
    this.buttonLink = 'https://www.twitch.tv/officialtazed';
    this.icon = 'av:videocam';
  }

  
  render() {
    return html`
      <div class="button-wrapper">
        <a class="button cta-button" href="${this.buttonLink}">
          <simple-icon-lite icon="${this.icon}"> </simple-icon-lite>
          ${this.buttonText}</a
        >
      </div>
    `;
  }
}
