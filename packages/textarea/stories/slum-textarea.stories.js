import { html } from "lit-html";
import "@slum-ui/textarea";


export default {
  title: "SlumUI/Textarea",
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
    <slum-textarea
      label=${args.label}
      variant=${args.variant}
    ></slum-textarea>
  `;
};

export const SlumTextarea = Template.bind({});
SlumTextarea.args = {
  label: "SlumTextarea",
};
