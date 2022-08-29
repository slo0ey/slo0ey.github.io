import styled from '@emotion/styled';
import { FC } from 'react';

type TitleProps = {
  title: string;
  subtitle: string[];
};

const TitleWrapper = styled.div`
  width: 960px;
  height: 300px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 2fr 3fr;
  align-items: center;
  text-align: center;
  color: #fff;

  @media (max-width: 960px) {
    width: 100%;
    height: 200px;
  }
`;

const TitleText = styled.h1`
  font-size: 45px;
  align-self: end;

  @media (max-width: 960px) {
    font-size: 35px;
  }
`;

const SubTitleText = styled.div`
  font-size: 24px;
  white-space: pre-line;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`;

const Title: FC<TitleProps> = ({
  title,
  subtitle
}) => {
  return (
    <TitleWrapper>
      <TitleText>{title}</TitleText>
      <SubTitleText>{subtitle.join('\n')}</SubTitleText>
    </TitleWrapper>
  );
};

export default Title;
