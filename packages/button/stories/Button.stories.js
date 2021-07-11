import { html } from "lit-html";
import "@slum-ui/button";

export default {
  title: "SlumUI/Button",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "cyan-solid",
          "cyan-outlined",
          "cyan-transparent",
          "pink-solid",
          "pink-outlined",
          "pink-transparent",
          "purple-transparent",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small"],
      },
    },
  },
};

const Template = (args) => {
  return html`
    <slum-button
      label=${args.label}
      variant="${args.variant}"
      size="${args.size}"
      >${args.label}</slum-button
    >
  `;
};

export const SlumButton = Template.bind({});
SlumButton.args = {
  label: "SlumButton",
};
