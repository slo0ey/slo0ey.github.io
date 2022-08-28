import { FC } from 'react';
import { Introduction } from '../types/Common.types';

import intro from '../introduction.json';
import styled from '@emotion/styled';

type HeaderProps = {
  intro: Introduction
};

//TODO: 마저 만들기
const BackGround = styled.div`
  width: 100%;
  background-image: linear-gradient();
`

const Header: FC<HeaderProps> = ({ 
  intro: {
    title,
    description,
    army_timer
  }
}) => {
  return <BackGround />;
};