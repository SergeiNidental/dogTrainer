import React from "react";

import Text from "../text";
import Img from '../img';

import banner from '../../../img/banner.jpg';

export default function PersonalTrenings(){
    return(
        <>
        <Text typeTag='h1' id='name'>
            Очные занятие в Монреале
        </Text>
        <Img src={banner} alt="banner" />
        </>
    )
}