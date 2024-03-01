import { SVGProps } from 'react';
export const LogOut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 19H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h4M19 10H7"
    />
  </svg>
);
