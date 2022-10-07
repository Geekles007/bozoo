import {Settings} from "react-slick";

class CreateCollection {
    settings: Settings = {
        dots: false,
        infinite: true,
        centerPadding: "60px",
        arrows: false,
        // autoplay: true,
        speed: 500,
        pauseOnHover: true,
        className: "center",
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    goNext(customSliderRef: any) {
        console.log("prev")
        customSliderRef.current.slickNext();
    }

    goPrev(customSliderRef: any) {
        customSliderRef.current.slickPrev();
    }
}

export default new CreateCollection();
