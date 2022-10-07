import React, {memo} from "react";

interface ButtonProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "onClick"> {
    children: JSX.Element | string;
    type: "large" | "medium" | "small";
}

const Button = ({children, type, onClick, ...props}: ButtonProps) => {

    return <button onClick={onClick} className={`_btn _${type} ${props.className}`}>
        {children}
    </button>

}

export default memo(Button);
