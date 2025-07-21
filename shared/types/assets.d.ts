declare module "*.png" {
  const value: {
    src: string;
    height: number;
    width: number;
    blurDataURL: string;
  };
  export = value;
}

declare module "*.svg" {
  import type { SVGProps } from "react";
  const ReactComponent: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}
