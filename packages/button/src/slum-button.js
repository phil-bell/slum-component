import { css } from "lit";
import { LionButton } from "@lion/button";

export class SlumButton extends LionButton {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          --slum-cyan: #7be4d5;
          --slum-cyan-dark: #70cec0;
          --slum-pink: #ff487a;
          --slum-pink-dark: #fc3068;
          --slum-purple: #8719b3;
          --slum-grey-light: #c2c2c2;
          --slum-grey-lightest: #f3f3f3;
          --slum-white: white;
          --slum-rainbow: linear-gradient(
            90deg,
            #f79533 0%,
            #f37055 15%,
            #ef4e7b 30%,
            #a166ab 44%,
            #5073b8 58%,
            #1098ad 72%,
            #07b39b 86%,
            #6dba82 100%
          );
          --font-size-xl: 26px;
          --font-size-l: 22px;
          --font-size: 20px;
          --font-size-s: 16px;
          --font-size-xs: 12px;

          --font-family: "Inconsolata", monospace;

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
}

customElements.define("slum-button", SlumButton);
