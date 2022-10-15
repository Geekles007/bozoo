import {createRef, useCallback, useState} from "react";
import {IModal} from "../models/IModal";

export function useGlobal() {

    const [drawerVisible, setDrawerVisible] = useState<boolean>();
    const [searchVisible, setSearchVisible] = useState<boolean>();
    const [modal, setModal] = useState<Partial<IModal>>();
    const connectWalletRef = createRef<HTMLDivElement>();

    const changeModalState = useCallback((value: IModal) => {
       setModal(old => {
           if(old?.visible !== value?.visible) {
               return value;
           }
       });
    }, [setModal])

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
        changeSearchState,
        modal,
        connectWalletRef,
        changeModalState
    }
}
