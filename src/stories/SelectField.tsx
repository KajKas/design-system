import { Component, createSignal } from "solid-js";
import { styled } from "solid-styled-components";

import { ThemeProvider } from "./styles";

export interface SelectFieldProps {
  placeholder: string;
  onClick?: () => void;
  disabled?: boolean;
  hasError?: boolean;
}

interface StyledSelectProps {
  disabled?: boolean;
  hasError?: boolean;
}

interface OptionProps {
  isSelected?: boolean;
}

const StyledSelect = styled("div")<StyledSelectProps>`
  border-radius: 8px;
  font-weight: 400;
  width: 240px;
  padding: 12px 20px;
  transition: all 100ms;
  background-color: #fff;
  color: #24275e;
  font-size: 16px;
  cursor: default;

  border: ${(props) => {
    if (props.hasError) return "2px solid #D54191";
    if (props.disabled) return "2px solid #6E6F86";
    return "2px solid #4147d5";
  }};
  color: ${(props) => (props.disabled ? "#6E6F86" : "#24275e")};
`;

const Option = styled("div")<OptionProps>`
  font-weight: 400;
  width: 240px;
  padding: 12px 20px;
  transition: all 100ms;
  background-color: #fff;
  color: #24275e;
  font-size: 12px;
  cursor: default;

  border-left: ${(props) =>
    props.isSelected ? "4px solid #4147D5" : "4px solid transparent"};

  &:hover {
    background-color: #e6e6e6;
  }
`;

const OptionsList = styled("div")`
  position: absolute;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
`;

const Label = styled("span")`
  color: #24275e;
  opacity: 0.5;
`;

const mockOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
];

export const SelectField: Component<SelectFieldProps> = ({
  placeholder,
  onClick,
  disabled,
  hasError,
}) => {
  const [showOptions, setShowOptions] = createSignal(false);
  const [selectState, setSelectState] = createSignal("");

  const handleShowOptions = () => setShowOptions(!showOptions());
  const handleSelectOption = (option: string) => {
    setSelectState(option);
    setShowOptions(false);
  };

  return (
    <ThemeProvider>
      <div>
        <StyledSelect
          onClick={handleShowOptions}
          disabled={disabled}
          hasError={hasError}
        >
          {selectState() || <Label>{placeholder}</Label>}
        </StyledSelect>
        {!disabled && !hasError && showOptions() && (
          <OptionsList>
            {mockOptions.map((option) => (
              <Option
                isSelected={option === selectState()}
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </Option>
            ))}
          </OptionsList>
        )}
      </div>
    </ThemeProvider>
  );
};
