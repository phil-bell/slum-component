import { LionInput } from "@lion/input";
import { coreStyles } from "@slum-ui/core";
import { css } from "lit";
export class SlumInput extends LionInput {
  static get styles() {
    return [
      super.styles,
      coreStyles,
      css`
        :host {
          --slum-input-border-color: var(--slum-pink);
          --slum-input-label-top: 24px;
          --slum-input-label-left: 6px;
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
        ::slotted(input:hover) {
          box-shadow: 5px 5px 0 var(--slum-input-border-color);
          outline: none;
        }
        ::slotted(label) {
          transition: all 0.2s ease 0s;
          position: relative;
          color: var(--slum-grey);
          top: var(--slum-input-label-top);
          left: var(--slum-input-label-left);
        }

        .input-group__input:after {
          color: var(--slum-input-after-color, transparent);
          content: var(--slum-input-after-content);
          position: relative;
          font-size: 24px;
          right: 34px;
          top: 1px;
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
          --slum-input-label-top: 27px;
        }
        :host([size="large"]) {
          --slum-input-font-size: var(--font-size-l);
          --slum-input-height: 35px;
          --slum-input-label-top: 30px;
        }
        :host([state="success"]) {
          --slum-input-after-content: "👍";
          --slum-input-after-color: var(--slum-cyan);
        }
        :host([state="error"]) {
          --slum-input-after-content: "💥";
          --slum-input-after-color: var(--slum-pink);
        }
        :host([focused]),
        :host([filled]) {
          --slum-input-label-top: 0;
          --slum-input-label-left: 0;
        }
      `,
    ];
  }
}

customElements.define("slum-input", SlumInput);
