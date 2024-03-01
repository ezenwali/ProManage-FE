import { SVGProps } from 'react';
export const Options = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={4} fill="none" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
);
