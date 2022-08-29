import { FC } from 'react';

import styled from '@emotion/styled';
import Title from './Title';
import Menu from './Menu';

type HeaderProps = {
  title: string;
  subtitle: string[];
};

//TODO: 마저 만들기
const HeaderWrapper = styled.header`
  width: 100%;
  background-image: linear-gradient(60deg, #f78563, #bfce63);
`;

const Header: FC<HeaderProps> = ({ 
  title,
  subtitle
}) => {
  return (
    <HeaderWrapper>
      <Title
        title={title}
        subtitle={subtitle}
      />
      <Menu />
    </HeaderWrapper>
  );
};

export default Header;