import { Component, Ref } from "solid-js";
import { styled } from "solid-styled-components";
import { Icon, IconTypes } from "./Icon/Icon";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "link";
  size?: "sm" | "md";
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  ref?: Ref<HTMLButtonElement>;
  iconLeft?: IconTypes;
  iconRight?: IconTypes;
}

interface StyledButtonProps {
  variant?: "primary" | "secondary" | "link";
  size?: "sm" | "md";
}

const StyledButton = styled("button")<StyledButtonProps>`
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 100ms;
  transition: all 100ms;
  display: flex;
  align-items: center;

  font-size: ${(props) => (props.size === "sm" ? "14px" : "16px")};
  text-decoration: ${(props) => (props.variant === "link" ? "underline" : "none")};
  box-shadow: ${(props) =>
    props.variant === "link" ? "none" : "4px 4px 0px 0px #252aa7"};
  border: ${(props) => (props.variant === "link" ? "none" : "2px solid #4147d5")};
  padding: ${(props) => (props.size === "sm" ? "8px 20px" : "16px 20px")};
  background-color: ${(props) =>
    props.variant === "primary" ? "#4147d5" : "transparent"};
  color: ${(props) => (props.variant === "primary" ? "#ffffff" : "#4147d5")};

  &:active:enabled {
    box-shadow: none;
    translate: 4px 4px;
    transition: all 100ms;
  }
  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "#2E33B8" : "transparent"};
    border: ${(props) =>
      props.variant === "link" ? "none" : "2px solid #2E33B8"};
    color: ${(props) => (props.variant === "primary" ? "#ffffff" : "#2E33B8")};
  }
  &:disabled {
    background-color: ${(props) =>
      props.variant === "primary" ? "#60629F" : "transparent"};
    border: ${(props) =>
      props.variant === "link" ? "none" : "2px solid #60629F"};
    color: ${(props) => (props.variant === "primary" ? "#ffffff" : "#60629F")};
    box-shadow: ${(props) =>
      props.variant === "link" ? "none" : "4px 4px 0px 0px #42458A"};
  }
`;

export const Button: Component<ButtonProps> = ({
  variant,
  size,
  label,
  onClick,
  disabled,
  ref,
  iconLeft,
  iconRight,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
    >
      {iconLeft && <Icon iconType={iconLeft} marginRight variant={variant} />}
      {label}
      {iconRight && <Icon iconType={iconRight} marginLeft variant={variant} />}
    </StyledButton>
  );
};
