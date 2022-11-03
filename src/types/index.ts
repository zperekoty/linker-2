import type { JSX } from "preact/jsx-runtime";

export type svgProps = { classes?: string };

export type cardProps = {
  title: string;
  img?: string;
  description: string;
  source?: string;
  url: string;
  social?: boolean;
  socialIcon?: JSX.Element;
  socialLogo?: JSX.Element;
};
