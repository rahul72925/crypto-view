import * as React from "react";
const SearchIcon = ({ fill = "#ffffff", props }) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 0.45 0.45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m.435.435-.12-.12m-.12.06a.18.18 0 1 1 0-.36.18.18 0 0 1 0 .36Z"
      stroke={fill}
      strokeWidth={0.03}
    />
  </svg>
);
export { SearchIcon };
