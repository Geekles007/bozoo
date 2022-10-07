import {useCallback, useState} from "react";

export function useDrawer() {

    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

    const changeDrawerState = useCallback((value: boolean) => {
        setDrawerVisible(value);
    }, [setDrawerVisible])

    return {
        drawerVisible,
        changeDrawerState
    }
}
