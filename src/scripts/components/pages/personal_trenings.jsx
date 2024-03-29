import React from "react";

import Text from "../text";
import Img from '../img';
import ListComponent from "../list";
import Container from "../container";
import ButtonLink from '../link_button';
import SeparatingLine from "../separatingline";
import Gallary from "../gallary";

import banner from '../../../img/banner.jpg';
import whatsapp from '../../../img/whatsapp.svg';
import telegram from '../../../img/telegram.svg';
import facebook from '../../../img/facebook.svg';

export default function PersonalTrenings(){
    return(
        <>
        <Text typeTag='h1' id='name'>
            Очные занятие в Монреале
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
      Первое очное занятие + индивидуальный план работы
      </Text>
      <ListComponent id='workplan4' />
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
      Каждое последующее очное занятие
      </Text>
      <ListComponent id='workplan5' />
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
      Пакет из 4 очных занятий
      </Text>
      <ListComponent id='workplan6' />
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
      <ListComponent id='workStadeList1' />
      </Container>
      <Text typeTag='h2' id='reviews'>
        ОТЗЫВЫ УЧЕНИКОВ
      </Text>
      <Container>
      <Gallary  id='reviews'/>
      </Container>
      <Container id='backgroundBrown'>
      <Text typeTag='h2' id='backgroundBrown'>
        ДОПОЛНИТЕЛЬНО
      </Text>
      <ListComponent id='additoinList1' />
      </Container>
        </>
    )
}