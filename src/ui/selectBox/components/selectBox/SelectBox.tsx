import { CSSProperties, ChangeEvent, ReactNode } from "react";
import { Label } from "../Label";
import React from "react";
import "../../../../assets/css/SelectBox.css"


type SelectOption = {
  label: string;
  value: string;
};

type Props = {
  value?: string;
  label?: string;
  labelStyle?: CSSProperties;
  disabled?: boolean;
  className?: string;
  containerStyle?: string;
  options: SelectOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  icon?: ReactNode;
  withoutchevron?: boolean;
  isInDarkMode?: boolean;
};

const SelectBox = ({
  value,
  label,
  disabled,
  className,
  options,
  icon,
  containerStyle,
  labelStyle,
  onChange,
  withoutchevron,
  isInDarkMode,
}: Props) => {
  const selectBox = (
    <div className={`relative `}>
      {icon && <div>{icon}</div>}
      <select
        aria-label="Schedule_list"
        className={`${className} styledSelect ${
          isInDarkMode ? "bg-gray-900" : "bg-gray-200"
        } selectList ${icon ? " indent-9" : ""}`}
        disabled={disabled}
        onChange={onChange}
        value={value}
        id={`select ${value}`}
        style={
          !withoutchevron
            ? {
                backgroundImage: isInDarkMode
                  ? `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`
                  : `url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
              }
            : {}
        }
      >
        {options.map(({ value, label }) => (
          <option
            className="text-black dark:text-white"
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );

  const result = label ? (
    <Label>
      <div id="buildings_list" style={labelStyle} className="Label">
        {label}
      </div>
      {selectBox}
    </Label>
  ) : (
    selectBox
  );

  return <div className={containerStyle}>{result}</div>;
};

export { SelectBox };
export type { SelectOption };
