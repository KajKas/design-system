import { Component } from "solid-js";
import { styled } from "solid-styled-components";

import { ThemeProvider } from "./styles";
import { Icon } from "./Icon/Icon";
import { ErrorIcon } from "./Icon/icons/ErrorIcon";

export interface InputFieldProps {
  labelText: string;
  supportMessage: string;
  onClick?: () => void;
  disabled?: boolean;
  hasError?: boolean;
}

interface StyledInputProps {
  hasError?: boolean;
  disabled?: boolean;
}

const InputWrapper = styled("div")<StyledInputProps>`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled("input")<StyledInputProps>`
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  padding: 12px 10px;
  color: #6e6f86;

  border: ${(props) =>
    props.hasError ? "2px solid #D54191" : "2px solid #d4d5f7"};

  &::placeholder {
    color: rgba(36, 39, 94, 0.5);
  }
  &:focus {
    border: 2px solid #4147d5;
  }
  &:hover {
    border: 2px solid #2e33b8;
  }
  &:disabled {
    border: 2px solid #60629f;
  }
`;

const Message = styled("div")<StyledInputProps>`
  font-size: 12px;
  margin-top: 6px;
  display: flex;
  align-items: center;

  color: ${(props) => {
    if (props.hasError) return "#D54191";
    if (props.disabled) return "#6e6f86";
    return "#24275E";
  }};

  svg {
    margin-right: 6px;
  }
`;

export const InputField: Component<InputFieldProps> = ({
  labelText,
  onClick,
  disabled,
  hasError,
  supportMessage,
}) => {
  return (
    <ThemeProvider>
      <div>
        <StyledInput
          onClick={onClick}
          disabled={disabled}
          placeholder={labelText}
          hasError={hasError}
        />
        {supportMessage && (
          <Message disabled={disabled} hasError={hasError}>
            {hasError && <ErrorIcon />}
            {supportMessage}
          </Message>
        )}
      </div>
    </ThemeProvider>
  );
};
