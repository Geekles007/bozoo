import React, {memo} from "react";

interface ButtonProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "onClick"> {
    children: JSX.Element | string;
    type: "large" | "medium" | "small"
}

const Button = ({children, type, ...props}: ButtonProps) => {

    return <button className={`_btn _${type} ${props.className}`}>
        {children}
    </button>

}

export default memo(Button);
