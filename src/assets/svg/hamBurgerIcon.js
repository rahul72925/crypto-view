import * as React from "react";
const HamBurgerIcon = ({ fill = "#000", ...props }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 0.45 0.45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.045.09a.015.015 0 0 0 0 .03h.36a.015.015 0 0 0 0-.03h-.36ZM.03.225A.015.015 0 0 1 .045.21h.36a.015.015 0 0 1 0 .03h-.36A.015.015 0 0 1 .03.225Zm0 .12A.015.015 0 0 1 .045.33h.36a.015.015 0 0 1 0 .03h-.36A.015.015 0 0 1 .03.345Z"
      fill={fill}
    />
  </svg>
);
export { HamBurgerIcon };
