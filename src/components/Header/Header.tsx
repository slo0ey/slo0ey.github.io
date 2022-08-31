import { FC } from 'react';

import styled from '@emotion/styled';
import Title from './Title';
import Menu from './Menu';
import { SocialInfo } from '../../types/Common.types';
import SocialTab from './Socials';

type HeaderProps = {
  title: string;
  subtitle: string[];
  socials: SocialInfo[];
};

type SocialItemProps = {
  name: string;
  id: string;
  icon: string;
  url: string;
};

type SocialTabProps = {
  socials: SocialInfo[];
};

//TODO: 마저 만들기
const HeaderWrapper = styled.header`
  width: 100%;
  background-image: linear-gradient(60deg, #f78563, #bfce63);
`;

const Header: FC<HeaderProps> = ({ title, subtitle, socials }) => {
  return (
    <HeaderWrapper>
      <Title title={title} subtitle={subtitle} />
      <Menu />
      <SocialTab socials={socials} />
    </HeaderWrapper>
  );
};

export default Header;
