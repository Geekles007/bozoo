import React, {memo} from "react";
import Button from "../../common/components/button";
import CreateCollection from "./controller";
import Slider from "react-slick";
import CollectionItem from "../../common/components/collection-item";

type CreateCollectionSliderProps = {}

const CreateCollectionSlider = ({}: CreateCollectionSliderProps) => {

    const {settings} = CreateCollection;

    return <div className={"collection--slider"}>
        <div className="_left">
            <h3>Create NFT marketplace for your community</h3>
            <span>Powered by <a href="https://ebirly.vercel.app" target={"_blank"}>ebirly</a></span>
            <Button type={"large"}>Create a collection</Button>
        </div>
        <div className="_right">
            <Slider {...settings} className={"_slider"}>
                {
                    [1,2,3,4,5,6,7].map((item, index) => {
                        return <CollectionItem key={index} />
                    })
                }
            </Slider>
        </div>
    </div>

}

export default memo(CreateCollectionSlider);
