import { html } from "lit-html";
import "@slum-ui/input";

const code = `
<slum-input
  placeholder="SlumInput"
  variant="pink"
  size="small"
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
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    state: {
      control: {
        type: "select",
        options: ["success", "error"],
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
      label=${args.label}
      variant=${args.variant}
      size=${args.size}
      state=${args.state}
    ></slum-input>
  `;
};

export const SlumInput = Template.bind({});
SlumInput.args = {
  label: "SlumInput",
};
