import { css } from "lit";

export const coreStyles = css`
  :host {
    --slum-cyan: #7be4d5;
    --slum-cyan-dark: #70cec0;
    --slum-pink: #ff487a;
    --slum-pink-dark: #fc3068;
    --slum-purple: #8719b3;
    --slum-grey-light: #c2c2c2;
    --slum-grey-lightest: #f3f3f3;
    --slum-white: white;
    --slum-rainbow: linear-gradient(
      90deg,
      #f79533 0%,
      #f37055 15%,
      #ef4e7b 30%,
      #a166ab 44%,
      #5073b8 58%,
      #1098ad 72%,
      #07b39b 86%,
      #6dba82 100%
    );
    --font-size-xl: 26px;
    --font-size-l: 22px;
    --font-size: 20px;
    --font-size-s: 16px;
    --font-size-xs: 12px;

    --font-family: "Inconsolata", monospace;
  }
`;
