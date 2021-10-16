import { coreStyles } from "@slum-ui/core";
import { html, css, LitElement } from "lit";

export class SlumLoginButton extends LitElement {
  static get styles() {
    return [
      coreStyles,
      css`
        :host .logout__text--username {
          font-family: var(--font-family);
          color: var(--slum-purple);
        }
        :host([end]) {
          margin-left: auto;
        }
      `,
    ];
  }

  static get properties() {
    return {
      login: { type: Object, attribute: "login" },
      logoutLink: { type: String, attribute: "logout-link" },
      loginLink: { type: String, attribute: "login-link" },
      createLink: { type: String, attribute: "create-link" },
    };
  }

  get logoutTemplate() {
    return html`
      <strong class="logout__text--username">${this.login.username}</strong>
      <slum-button variant="pink-transparent" link="${this.logoutLink}"
        >logout</slum-button
      >
    `;
  }
  get loginTemplate() {
    return html`
      <slum-button variant="pink-transparent" link="${this.loginLink}"
        >login</slum-button
      >
      <slum-button variant="pink-transparent" link="${this.createLink}"
        >create</slum-button
      >
    `;
  }

  render() {
    if (this.login) {
      return this.logoutTemplate;
    }
    return this.loginTemplate;
  }
}

customElements.define("slum-login-button", SlumLoginButton);
