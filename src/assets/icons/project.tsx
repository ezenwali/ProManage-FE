import { SVGProps } from 'react';
export const Project = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      stroke="#707070"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM3 9h18M9 21V9"
    />
  </svg>
);
