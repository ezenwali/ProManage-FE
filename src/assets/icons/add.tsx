import { SVGProps } from 'react';
export const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 1v14M1 8h14" />
  </svg>
);
