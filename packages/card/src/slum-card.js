import { css, html, LitElement } from "lit";

export class SlumCard extends LitElement {
  static get styles() {
    return css`
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

          --slum-card-border-color: var(--slum-pink);

          font-family: var(--font-family);
        }

        .card{
          border: 1px solid var(--slum-grey-light);
          border-bottom-color: var(--slum-card-border-color);
          border-radius: 4px;
          padding: 20px;
        }

        .card:hover{
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

      `;
  }

  render() {
    return html`
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("slum-card", SlumCard);
