import React from "react";

export type DeleteIconProps = {
  fill: string;
};

export const DeleteIcon = ({ fill }: DeleteIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width="24px"
      height="24px"
      data-icon="delete"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.1716 2C13.9009 2 14.6029 2.26559 15.1482 2.7432L15.2929 2.87868L17.415 5H21V7H19.875L18.1069 20.2643C17.9814 21.2056 17.2141 21.9212 16.2814 21.9939L16.1245 22H7.87552C6.92587 22 6.11519 21.334 5.91984 20.4191L5.89306 20.2643L4.124 7H3V5H6.584L8.70711 2.87868C9.22283 2.36295 9.90699 2.05439 10.6303 2.00654L10.8284 2H13.1716ZM17.857 7H6.142L7.87552 20H16.1245L17.857 7ZM13.1716 4H10.8284C10.6074 4 10.3939 4.07316 10.2204 4.20608L10.1213 4.29289L9.413 5H14.586L13.8787 4.29289C13.7224 4.13661 13.5197 4.0374 13.303 4.00867L13.1716 4Z"
      />
    </svg>
  );
};
