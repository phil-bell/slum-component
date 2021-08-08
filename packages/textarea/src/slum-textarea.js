import { LionTextarea } from "@lion/textarea";
import { coreStyles } from "@slum-ui/core";
import { css } from "lit";
export class SlumTextarea extends LionTextarea {
  static get styles() {
    return [
      super.styles,
      coreStyles,
      css`
        :host {
          --slum-textarea-border-color: var(--slum-pink);
          --slum-textarea-label-top: 24px;
          --slum-textarea-label-left: 6px;
        }
        ::slotted(textarea) {
          border: 2px solid var(--slum-grey-light);
          border-radius: 5px;
          color: var(--slum-grey);
          font-family: var(--font-family);
          font-size: var(--slum-textarea-font-size);
          height: var(--slum-textarea-height);
          outline: none;
          padding-left: 8px;
        }
        ::slotted(textarea:hover) {
          box-shadow: 5px 5px 0 var(--slum-textarea-border-color);
          outline: none;
        }
        ::slotted(label) {
          transition: all 0.2s ease 0s;
          position: relative;
          color: var(--slum-grey);
          top: var(--slum-textarea-label-top);
          left: var(--slum-textarea-label-left);
        }

        .textarea-group__textarea:after {
          color: var(--slum-textarea-after-color, transparent);
          content: var(--slum-textarea-after-content);
          position: relative;
          font-size: 24px;
          right: 34px;
          top: 1px;
        }
        :host([variant="cyan"]) {
          --slum-textarea-border-color: var(--slum-cyan);
        }
        :host([variant="pink"]) {
          --slum-textarea-border-color: var(--slum-pink);
        }
        :host([variant="purple"]) {
          --slum-textarea-border-color: var(--slum-purple);
        }
        :host([size="small"]) {
          --slum-textarea-font-size: var(--font-size-s);
          --slum-textarea-height: 25px;
        }
        :host([size="medium"]) {
          --slum-textarea-font-size: var(--font-size);
          --slum-textarea-height: 30px;
          --slum-textarea-label-top: 27px;
        }
        :host([size="large"]) {
          --slum-textarea-font-size: var(--font-size-l);
          --slum-textarea-height: 35px;
          --slum-textarea-label-top: 30px;
        }
        :host([state="success"]) {
          --slum-textarea-after-content: "👍";
          --slum-textarea-after-color: var(--slum-cyan);
        }
        :host([state="error"]) {
          --slum-textarea-after-content: "💥";
          --slum-textarea-after-color: var(--slum-pink);
        }
        :host([focused]),
        :host([filled]) {
          --slum-textarea-label-top: 0;
          --slum-textarea-label-left: 0;
        }
      `,
    ];
  }
}

customElements.define("slum-textarea", SlumTextarea);
