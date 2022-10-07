import React, {memo} from "react";
import {FaDiscord, FaInstagram, FaTwitter} from "react-icons/all";

type SocialsProps = {
    className?: string;
}

const Socials = ({className}: SocialsProps) => {

    return <div className={`_socials ${className}`}>
        <a href="#">
            <FaDiscord />
        </a>
        <a href="#">
            <FaInstagram />
        </a>
        <a href="#">
            <FaTwitter />
        </a>
    </div>

}

export default memo(Socials);
