import { html } from "lit-html";
import "@slum-ui/card";

export default {
  title: "SlumUI/Card",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["cyan", "pink", "purple"],
      },
    },
  },
};

const Template = (args) => {
  return html`
    <slum-card variant=${args.variant}>${args.slotContent}</slum-card>
  `;
};

export const SlumCard = Template.bind({});
SlumCard.args = {
  slotContent: "SlumCard - test",
};
