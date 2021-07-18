import { css, LitElement, html } from "lit";

export class SlumNav extends LitElement {
  static styles = css`
    :host .slum-nav {
      display: flex;
      flex-direction: row;
    }
  `;

  render() {
    return html`<div class="slum-nav"><slot></slot></div>`;
  }
}

customElements.define("slum-nav", SlumNav);
