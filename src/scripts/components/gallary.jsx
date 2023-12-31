import React from "react";

import img2 from '../../img/2.PNG';
import img1 from '../../img/1.PNG';
import img3 from '../../img/3.PNG';
import img4 from '../../img/4.PNG';
import img5 from '../../img/5.PNG';

import '../../styles/img/__img_1';

import Img from '../components/img';

export default function Gallary({id}){
  let integerGallary;
  switch(id) {
    case 'diplom':
      integerGallary =(
        <div className="scroll-container">
        <Img src={img2} alt='gallary' />
        <Img src={img1} alt='gallary' />
        <Img src={img3} alt='gallary' />
      </div>  
      );
      break;
    case 'reviews':
      integerGallary=(
        <div className="scroll-container">
        <Img src={img1} alt='gallary' />
        <Img src={img4} alt='gallary' />
        <Img src={img5} alt='gallary' />
      </div>  
      );
      break;
  }
    return (integerGallary);
}