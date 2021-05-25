import { css } from "lit";
import { LionButton } from "@lion/button";

export class SlumButton extends LionButton {
  static get styles() {
    return [super.styles, css``];
  }
}

customElements.define("slum-button", SlumButton);
