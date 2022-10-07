import {useCallback, useState} from "react";

export function useGlobal() {

    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
    const [searchVisible, setSearchVisible] = useState<boolean>(false);

    const changeDrawerState = useCallback((value: boolean) => {
        setDrawerVisible(value);
    }, [setDrawerVisible])

    const changeSearchState = useCallback((value: boolean) => {
        setSearchVisible(value);
    }, [setSearchVisible])

    return {
        drawerVisible,
        changeDrawerState,
        searchVisible,
        changeSearchState
    }
}
