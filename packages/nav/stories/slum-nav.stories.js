import { html } from "lit-html";
import "@slum-ui/nav";

const code = `
<slum-nav

></slum-nav>`;

export default {
  title: "SlumUI/Nav",
  argTypes: {},
  parameters: {
    docs: {
      source: {
        code: code,
      },
    },
  },
};

const Template = (args) => {
  return html`
    <slum-nav>
      <slum-nav-item>home</slum-nav-item>
      <slum-nav-item>create</slum-nav-item>
      <slum-nav-item>view</slum-nav-item>
      <slum-nav-item end>archive</slum-nav-item>
    </slum-nav>
  `;
};

export const SlumNav = Template.bind({});
