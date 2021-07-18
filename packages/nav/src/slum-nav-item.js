import { SlumButton } from "@slum-ui/button";
import { css } from "lit";

export class SlumNavItem extends SlumButton {
  static get styles() {
    return [
      super.styles,
      css`
        :host([end]) {
          margin-left: auto;
        }
      `,
    ];
  }

  firstUpdated() {
    this.variant = "pink-transparent";
    this.size = "small";
  }
}

customElements.define("slum-nav-item", SlumNavItem);
