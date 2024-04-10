import React from "react";
import PropTypes from "prop-types";

export type DownloadIconProps = {
  fill: string;
};

export const DownloadIcon = ({ fill }: DownloadIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width="24px"
    height="24px"
    data-icon="download"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 21H19V19H5M19 10H15V4H9V10H5L12 17L19 10Z"
    />
  </svg>
);
