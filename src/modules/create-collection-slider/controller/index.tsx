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
        slidesToScroll: 4
    };
}

export default new CreateCollection();
