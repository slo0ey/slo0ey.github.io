import { FC } from 'react';
import { Introduction } from '../types/Common.types';

import styled from '@emotion/styled';

type HeaderProps = Introduction;

//TODO: 마저 만들기
const BackGround = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #f78563, #bfce63);
`;

const Wrapper = styled.div`
  width: 768px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const Title = styled.div`
  font-size: 45px;
  color: #fff;

  @media (max-width: 960px) {
    font-size: 35px;
  }
`;

const SubTitle = styled.div`
  margin-top: 30px;
  font-size: 25px;
  color: #fff;
  white-space: pre-line;

  @media (max-width: 960px) {
    margin-top: 10px;
    font-size: 18px;
  }
`;

const Header: FC<HeaderProps> = ({ 
  title,
  subtitle,
  army_timer
}) => {
  return (
    <BackGround>
      <Wrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle.join('\n')}</SubTitle>
      </Wrapper>
    </BackGround>
  );
};

export default Header;