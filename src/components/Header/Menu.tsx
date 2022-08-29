import { FC } from 'react';

import styled from '@emotion/styled';

const MenuWrapper = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  align-items: center;
  color: #fff;
  border-top: 1px solid white;
`;

const MenuItem = styled.div`
  font-size: 20px;
  border-right: 1px solid #fff;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const Menu: FC = () => {
  return (
    <MenuWrapper>
      <MenuItem>홈</MenuItem>
      <MenuItem>할일</MenuItem>
      <MenuItem>상태</MenuItem>
      <MenuItem>뭐넣지</MenuItem>
      <MenuItem style={{
        borderRight: 'none'
      }}>흐음..</MenuItem>
    </MenuWrapper>
  );
};

export default Menu;