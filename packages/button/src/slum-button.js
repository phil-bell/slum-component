import { css } from "lit";
import { LionButton } from "@lion/button";

export class SlumButton extends LionButton {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          font-family: "Inconsolata", monospace;
          --slum-cyan: #7be4d5;
          --slum-cyan-dark: #70cec0;
          --slum-pink: #ff487a;
          --slum-purple: #8719b3;
          --slum-grey-light: #c2c2c2;
          --slum-grey-lightest: #f3f3f3;
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
          --font-size-s: 18px;
          --font-size-xs: 14px;
          border-radius: 5px;
          border: 2px solid var(--slum-cyan);
          background: white;
        }
      `,
    ];
  }
}

customElements.define("slum-button", SlumButton);
