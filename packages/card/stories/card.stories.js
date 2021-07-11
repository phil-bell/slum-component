import { html } from "lit-html";
import "@slum-ui/card";

export default {
  title: "SlumUI/Card",
  argTypes: {},
};

const Template = (args) => {
  return html` <slum-card>${args.slotContent}</slum-card> `;
};

export const SlumCard = Template.bind({});
SlumCard.args = {
  slotContent: "SlumCard - test",
};
