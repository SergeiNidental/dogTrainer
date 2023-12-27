import React from "react";

import img2 from '../../img/2.PNG';

import '../../styles/img/__img_1';

import Img from '../components/img';

export default function Gallary(){
    return (
      <div className="scroll-container">
        <Img src={img2} alt='gallary'  />
      </div>  
    );
}