import { CSSProperties, ChangeEvent, ReactNode } from "react";
import "../../../../assets/css/SelectBox.css";
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
declare const SelectBox: ({ value, label, disabled, className, options, icon, containerStyle, labelStyle, onChange, withoutchevron, isInDarkMode, }: Props) => import("react/jsx-runtime").JSX.Element;
export { SelectBox };
export type { SelectOption };
//# sourceMappingURL=SelectBox.d.ts.map