import * as AllIcons from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>; //for svg ko all properties

export const Icons = {
  ...AllIcons,
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),

  logo: (props: IconProps) => (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0 0 674.01 674.01"
    >
      <path d="M226.677,357.751v83.477v28.181v3.389h220.656v-3.057v-28.513v-83.145l-110.328-91.386L226.677,357.751z M334.344,428.933 h-40.875v-38.217h40.875V428.933z M334.344,385.731h-40.875v-38.217h40.875V385.731z M339.66,347.515h40.874v38.217H339.66 V347.515z M339.66,390.716h40.874v38.217H339.66V390.716z"></path>
      <polygon points="580.5,446.143 508.5,446.143 508.5,503.744 165.6,503.744 165.6,446.143 93.6,446.143 0,574.663 674.01,574.663 "></polygon>
      <polygon points="165.51,292.843 165.51,389.965 187.605,389.965 196.093,389.965 196.677,389.965 196.677,343.612 337.039,227.771 477.333,343.978 477.333,390.632 477.917,390.632 488.295,390.632 508.5,390.632 508.5,292.884 542.745,321.016 568.485,289.786 337.005,99.347 229.095,188.176 229.095,147.406 188.595,147.406 188.595,221.476 105.525,289.786 131.265,321.016 "></polygon>
    </svg>
  ),

  others: (props: IconProps) => <svg></svg>,
};

export type IconType = keyof typeof Icons;
