import { LionButton } from "@lion/button";
import { coreStyles } from "@slum-ui/core";
import { css } from "lit";

export class SlumButton extends LionButton {
  static get styles() {
    return [
      super.styles,
      coreStyles,
      css`
        :host {
          --background-color: var(--slum-white);
          --border-color: var(--slum-cyan-dark);
          --font-color: var(--slum-cyan-dark);
          --hover-shadow-color: var(--slum-pink);
          --active-background-color: var(--slum-grey-lightest);
          --hover-font-color: var(--font-color);
          --hover-background-color: var(--background-color);

          font-family: var(--font-family);
          color: var(--font-color);
          background: var(--background-color);
          border-radius: 5px;
          border: 2px solid var(--border-color);
        }
        :host(:hover) {
          box-shadow: 5px 5px 0 var(--hover-shadow-color);
          color: var(--hover-font-color);
          background: var(--hover-background-color);
        }
        :host(:active) {
          background: var(--active-background-color);
        }
        :host([active]) {
          background: var(--active-background-color);
        }

        :host([variant="cyan-solid"]) {
          --background-color: var(--slum-cyan);
          --border-color: var(--slum-cyan-dark);
          --font-color: var(--slum-white);
          --hover-shadow-color: var(--slum-pink);
          --active-background-color: var(--slum-cyan-dark);
        }
        :host([variant="cyan-outlined"]) {
          --background-color: var(--slum-white);
          --border-color: var(--slum-cyan-dark);
          --font-color: var(--slum-cyan-dark);
          --hover-shadow-color: var(--slum-pink);
          --active-background-color: var(--slum-grey-lightest);
        }
        :host([variant="cyan-transparent"]) {
          --background-color: var(--slum-cyan-dark);
          --border-color: transparent;
          --font-color: var(--slum-cyan-dark);
          --hover-shadow-color: transparent;
          --hover-background-color: var(--slum-rainbow);
          --active-background-color: var(--slum-purple);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        :host([variant="pink-solid"]) {
          --background-color: var(--slum-pink);
          --border-color: var(--slum-pink);
          --font-color: var(--slum-white);
          --hover-shadow-color: var(--slum-purple);
          --active-background-color: var(--slum-pink-dark);
        }
        :host([variant="pink-outlined"]) {
          --background-color: var(--white);
          --border-color: var(--slum-pink);
          --font-color: var(--slum-pink);
          --hover-shadow-color: var(--slum-purple);
          --active-background-color: var(--slum-grey-lightest);
        }
        :host([variant="pink-transparent"]) {
          --background-color: var(--slum-pink);
          --border-color: transparent;
          --font-color: var(--slum-pink);
          --hover-shadow-color: transparent;
          --hover-background-color: var(--slum-rainbow);
          --active-background-color: var(--slum-purple);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        :host([variant="purple-transparent"]) {
          --background-color: var(--slum-purple);
          --border-color: transparent;
          --font-color: var(--slum-purple);
          --hover-shadow-color: transparent;
          --hover-background-color: var(--slum-rainbow);
          --active-background-color: var(--slum-pink);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        :host([size="small"]) {
          font-size: var(--font-size-xs);
          padding: 4px;
        }
        :host([size="medium"]) {
          font-size: var(--font-size-s);
          padding: 8px;
        }
        :host([size="large"]) {
          font-size: var(--font-size-xl);
          padding: 16px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      variant: {
        type: String,
        reflect: true,
      },
    };
  }
}

customElements.define("slum-button", SlumButton);
