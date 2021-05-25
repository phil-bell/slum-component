import { html } from "lit-html";
import "@slum-ui/button";

export default {
  title: "SlumUI/Button",
  argTypes: {},
};

const Template = (args) => {
  return html` <slum-button>${args.label}</slum-button> `;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "SlumButton",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "SlumButton",
};

export const Large = Template.bind({});
Large.args = {
  label: "SlumButton",
};

export const Small = Template.bind({});
Small.args = {
  label: "SlumButton",
};
