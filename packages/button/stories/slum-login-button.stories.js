import { html } from "lit-html";
import "@slum-ui/button";

export default {
  title: "SlumUI/Button",
  argTypes: {},
  args: {
    login: { username: "test user" },
  },
};

const LoginTemplate = (args) => {
  return html` <slum-login-button .login=${args.login}></slum-login-button> `;
};

export const SlumLoginButton = LoginTemplate.bind({});
