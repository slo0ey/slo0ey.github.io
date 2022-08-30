import { FC } from 'react';

import styled from '@emotion/styled';
import Title from './Title';
import Menu from './Menu';

type HeaderProps = {
  title: string;
  subtitle: string[];
};

type SocialProps = {
  name: string;
  id: string;
  icon: string;
  url: string;
};

//TODO: 마저 만들기
const HeaderWrapper = styled.header`
  width: 100%;
  background-image: linear-gradient(60deg, #f78563, #bfce63);
`;

const SocialItem: FC<SocialProps> = ({ name, id, icon, url }) => {
  return (
    <li>
      <a href={url}>
        <img src={icon} alt={name} />
        <span>{id}</span>
      </a>
    </li>
  );
};

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <HeaderWrapper>
      <Title title={title} subtitle={subtitle} />
      <Menu />
    </HeaderWrapper>
  );
};

export default Header;
