import { html } from "lit-html";
import "@slum-ui/input";

export default {
  title: "SlumUI/Input",
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
    <slum-input
      placeholder=${args.placeholder}
      variant=${args.variant}
    ></slum-input>
  `;
};

export const SlumInput = Template.bind({});
SlumInput.args = {
  placeholder: "SlumInput",
};
