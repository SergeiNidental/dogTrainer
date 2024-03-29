import React from "react";

import img1 from '../../img/review_1.png';
import img2 from '../../img/review_2.png';
import img3 from '../../img/review_3.png';
import img4 from '../../img/review_4.png';
import img5 from '../../img/review_5.png';
import img6 from '../../img/review_6.png';
import img7 from '../../img/review_7.png';

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
        <Img src={img2} alt='gallary' />
        <Img src={img3} alt='gallary' />
        <Img src={img4} alt='gallary' />
        <Img src={img5} alt='gallary' />
        <Img src={img6} alt='gallary' />
        <Img src={img7} alt='gallary' />
      </div>  
      );
      break;
  }
    return (integerGallary);
}