import { html } from "lit-html";
import "@slum-ui/input";

const code = `
<slum-input
  placeholder="SlumInput"
  variant="pink"
></slum-input>`;

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
