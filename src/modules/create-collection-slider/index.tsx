import React, {memo} from "react";
import Button from "../../common/components/button";
import CreateCollection from "./controller";
import Slider from "react-slick";
import CollectionItem from "../../common/components/collection-item";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {useTheme} from "next-themes";
import {useTranslation} from "react-i18next";

type CreateCollectionSliderProps = {}

export function SampleNextArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <Button type={"medium"} className={className} onClick={onClick}><FaChevronRight color={"#fff"}/></Button>
    );
}

export function SamplePrevArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <Button type={"medium"} className={className} onClick={onClick}><FaChevronLeft color={"#fff"}/></Button>
    );
}

const CreateCollectionSlider = ({}: CreateCollectionSliderProps) => {

    const {settings, goPrev, goNext} = CreateCollection;
    const {theme} = useTheme();
    const customSlider: any = React.createRef();
    const {t} = useTranslation("translation", {useSuspense: false});

    return <div className={"collection--slider"}>
        <div className="_left">
            <h3>Create NFT marketplace for your community</h3>
            <span>Powered by <a href="https://ebirly.vercel.app" target={"_blank"} rel="noreferrer">ebirly</a></span>
            <Button type={"large"}>{t("createCollectionText")}</Button>
        </div>
        <div className={`_right _${theme}`}>
            <SamplePrevArrow className={"control--left"} onClick={() => goPrev(customSlider)} />
            <Slider {...settings} className={"_slider"} ref={customSlider}>
                {
                    [1,2,3,4,5,6,7].map((item, index) => {
                        return <CollectionItem key={index} />
                    })
                }
            </Slider>
            <SampleNextArrow className={"control--right"} onClick={() => goNext(customSlider)} />
        </div>
    </div>

}

export default memo(CreateCollectionSlider);
