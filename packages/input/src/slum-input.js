import { css } from "lit";
import { LionInput } from "@lion/input";

export class SlumInput extends LionInput {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          --slum-cyan: #7be4d5;
          --slum-cyan-dark: #70cec0;
          --slum-grey: #353535;
          --slum-grey-light: #c2c2c2;
          --slum-grey-lightest: #f3f3f3;
          --slum-pink: #ff487a;
          --slum-pink-dark: #fc3068;
          --slum-purple: #8719b3;
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
          --font-size-xl: 24px;
          --font-size-l: 18px;
          --font-size: 17px;
          --font-size-s: 16px;
          --font-size-xs: 12px;
          --font-family: "Inconsolata", monospace;

          --slum-input-border-color: var(--slum-pink);

          font-family: var(--font-family);
        }
        ::slotted(input) {
          border: 2px solid var(--slum-grey-light);
          border-radius: 5px;
          color: var(--slum-grey);
          font-family: var(--font-family);
          font-size: var(--slum-input-font-size);
          height: var(--slum-input-height);
          outline: none;
          padding-left: 8px;
        }
        ::slotted(input:focus) {
          box-shadow: 5px 5px 0 var(--slum-input-border-color);
          outline: none;
        }
        ::slotted(input)::placeholder {
          background: var(--slum-rainbow);
          color: transparent;
          font-family: var(--font-family);
          font-size: var(--slum-input-font-size);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .input-group__input:after {
          color: var(--slum-input-after-color, transparent);
          content: "○";
          position: relative;
          font-size: 38px;
          right: 4px;
          bottom: 28px;
        }
        :host([variant="cyan"]) {
          --slum-input-border-color: var(--slum-cyan);
        }
        :host([variant="pink"]) {
          --slum-input-border-color: var(--slum-pink);
        }
        :host([variant="purple"]) {
          --slum-input-border-color: var(--slum-purple);
        }
        :host([size="small"]) {
          --slum-input-font-size: var(--font-size-s);
          --slum-input-height: 25px;
        }
        :host([size="medium"]) {
          --slum-input-font-size: var(--font-size);
          --slum-input-height: 30px;
        }
        :host([size="large"]) {
          --slum-input-font-size: var(--font-size-l);
          --slum-input-height: 35px;
        }
        :host([state="success"]) {
          --slum-input-after-color: var(--slum-cyan);
        }
        :host([state="error"]) {
          --slum-input-after-color: var(--slum-pink);
        }
      `,
    ];
  }
}

customElements.define("slum-input", SlumInput);
