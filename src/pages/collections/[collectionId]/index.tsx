import React, {memo} from "react";
import {useRouter} from "next/router";

type CollectionProps = {}

const Collection = ({}: CollectionProps) => {

    const {query} = useRouter();

    console.log(query);

    return <div>
        Collection
    </div>

}

export default memo(Collection);
