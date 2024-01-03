import React from "react";

import Text from '../text';
import Img from '../img';
import ListComponent from "../list";
import Container from '../container';
import ButtonLink from '../link_button';
import SeparatingLine from "../separatingline";
import Gallary from '../gallary';

import banner from '../../../img/banner.jpg';
import whatsapp from '../../../img/whatsapp.svg';
import telegram from '../../../img/telegram.svg';
import facebook from '../../../img/facebook.svg';

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
      <Container id='horizontal'>
        <ButtonLink id='whatsapp' source='79923354779'>
        <Img src={whatsapp} alt="whatsapp" />
        </ButtonLink>
        <ButtonLink id='telegram' source='ENidental'>
        <Img src={telegram} alt="telegram" />
        </ButtonLink>
        <ButtonLink id='facebook' source='100040803893308'>
        <Img src={facebook} alt="facebook" />
        </ButtonLink>
      </Container>
      <SeparatingLine />
      <Text typeTag='p' id='diploms'>
      Каждое последующее онлайн-занятие
      </Text>
      <ListComponent id='workplan2' />
      <Text typeTag='p' id='boldtitle'>
      СТОИМОСТЬ - 2000000$
      </Text>
      <Text typeTag='p' id='thintitle'>
      ЗАПИСАТЬСЯ НА ЗАНЯТИЕ
      </Text>
      <Container id='horizontal'>
        <ButtonLink id='whatsapp' source='79923354779'>
        <Img src={whatsapp} alt="whatsapp" />
        </ButtonLink>
        <ButtonLink id='telegram' source='ENidental'>
        <Img src={telegram} alt="telegram" />
        </ButtonLink>
        <ButtonLink id='facebook' source='100040803893308'>
        <Img src={facebook} alt="facebook" />
        </ButtonLink>
      </Container>
      <SeparatingLine />
      <Text typeTag='p' id='diploms'>
      Пакет из 4 онлайн-занятий
      </Text>
      <ListComponent id='workplan3' />
      <Text typeTag='p' id='boldtitle'>
      СТОИМОСТЬ - 7000000$
      </Text>
      <Text typeTag='p' id='thintitle'>
      ЗАПИСАТЬСЯ НА ЗАНЯТИЕ
      </Text>
      <Container id='horizontal'>
        <ButtonLink id='whatsapp' source='79923354779'>
        <Img src={whatsapp} alt="whatsapp" />
        </ButtonLink>
        <ButtonLink id='telegram' source='ENidental'>
        <Img src={telegram} alt="telegram" />
        </ButtonLink>
        <ButtonLink id='facebook' source='100040803893308'>
        <Img src={facebook} alt="facebook" />
        </ButtonLink>
      </Container>
      <Container id='backgroundBrown'>
      <Text typeTag='h2' id='backgroundBrown'>
        ЭТАПЫ РАБОТЫ
      </Text>
      <ListComponent id='workStadeList' />
      </Container>
      <Text typeTag='h2' id='reviews'>
        ОТЗЫВЫ УЧЕНИКОВ
      </Text>
      <Gallary  id='diplom'/>
      <Container id='backgroundBrown'>
      <Text typeTag='h2' id='backgroundBrown'>
        ДОПОЛНИТЕЛЬНО
      </Text>
      <ListComponent id='additoinList' />
      </Container>
        </>
    )
}