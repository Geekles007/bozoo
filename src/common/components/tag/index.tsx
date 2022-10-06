import React, {memo} from "react";

type TagProps = {
    children: JSX.Element | string;
}

const Tag = ({children}: TagProps) => {

    return <div className={"_tag"}>
        {children}
    </div>

}

export default memo(Tag);
