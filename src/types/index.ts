export type svgProps = { classes?: string };

export type cardProps = {
  title: string;
  img: string;
  description: string;
  source: string;
  url: string;
  gr: "t" | "tl" | "tr" | "b" | "br" | "bl" | "l" | "r";
};
