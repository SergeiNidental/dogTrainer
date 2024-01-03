import React from "react";

import Text from '../text';
import Img from '../img';
import ListComponent from "../list";
import Container from '../container';

import banner from '../../../img/banner.jpg';

export default function OnlineCourses(){
    return(
        <>
        <Text typeTag='h1' id='name'>
            ОНЛАЙН ЗАНЯТИЯ
        </Text>
        <Img src={banner} alt="banner" />
        <Text typeTag='h2' id='reviews'>
        С КАКИМИ ПРОБЛЕМАМИ Я МОГУ ВАМ ПОМОЧЬ?
      </Text>
      <ListComponent id='problemToResolve' />
      <Container id='backgroundBrown'>
      <Text typeTag='h2' id='backgroundBrown'>
        ЧТО ВЫ ПОЛУЧИТЕ?
      </Text>
      <ListComponent id='whatyouwillget' />
      </Container>
      <Text typeTag='h2' id='reviews'>
        СТОИМОСТЬ И ТАРИФЫ
      </Text>
      <Text typeTag='p' id='diploms'>
      Первое онлайн-занятие + индивидуальный план работы
      </Text>
      <ListComponent id='workplan' />
      <Text typeTag='p' id='boldtitle'>
      СТОИМОСТЬ - 1000000$
      </Text>
      <Text typeTag='p' id='thintitle'>
      ЗАПИСАТЬСЯ НА ЗАНЯТИЕ
      </Text>
        </>
    )
}