import { Switch, Match } from "solid-js";
import { styled } from "solid-styled-components";

import { DeleteIcon } from "./icons/DeletelIcon";
import { DownloadIcon } from "./icons/DownloadIcon";
import { ErrorIcon } from "./icons/ErrorIcon";

interface IconContainerProps {
  marginLeft?: boolean;
  marginRight?: boolean;
}

const IconContainer = styled("div")<IconContainerProps>`
  width: 24px;
  height: 24px;
  margin-left: ${(props) => (props.marginLeft ? "8px" : "0")};
  margin-right: ${(props) => (props.marginRight ? "8px" : "0")};
`;

export type IconTypes = "delete" | "download" | "error";

export type IconProps = {
  iconType: IconTypes;
  variant?: "primary" | "secondary" | "link";
  marginLeft?: boolean;
  marginRight?: boolean;
};

export const Icon = ({
  iconType,
  variant,
  marginLeft,
  marginRight,
}: IconProps) => {
  const fill = variant === "primary" ? "#fff" : "#252aa7";

  return (
    <Switch>
      <Match when={iconType === "delete"}>
        <IconContainer marginLeft={marginLeft} marginRight={marginRight}>
          <DeleteIcon fill={fill} />
        </IconContainer>
      </Match>
      <Match when={iconType === "download"}>
        <IconContainer marginLeft={marginLeft} marginRight={marginRight}>
          <DownloadIcon fill={fill} />
        </IconContainer>
      </Match>
    </Switch>
  );
};
