import * as React from "react";
const CloseIcon = ({ fill = "#0D0D0D", ...props }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 0.72 0.72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.159.159a.03.03 0 0 1 .042 0L.36.318.519.159a.03.03 0 1 1 .042.042L.402.36l.159.159a.03.03 0 0 1-.042.042L.36.402.201.561A.03.03 0 0 1 .159.519L.318.36.159.201a.03.03 0 0 1 0-.042z"
      fill={fill}
    />
  </svg>
);
export { CloseIcon };
