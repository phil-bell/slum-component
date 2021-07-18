import { coreStyles } from "@slum-ui/core";
import { css, html, LitElement } from "lit";

export class SlumCard extends LitElement {
  static styles = [
    coreStyles,
    css`
      :host {
        --slum-card-border-color: var(--slum-pink);
      }

      .card {
        border: 1px solid var(--slum-grey-light);
        border-bottom-color: var(--slum-card-border-color);
        border-radius: 4px;
        padding: 20px;
      }

      .card:hover {
        box-shadow: 5px 5px 0 var(--slum-card-border-color);
      }

      :host([variant="cyan"]) {
        --slum-card-border-color: var(--slum-cyan);
      }
      :host([variant="pink"]) {
        --slum-card-border-color: var(--slum-pink);
      }
      :host([variant="purple"]) {
        --slum-card-border-color: var(--slum-purple);
      }
    `,
  ];

  render() {
    return html`
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("slum-card", SlumCard);
