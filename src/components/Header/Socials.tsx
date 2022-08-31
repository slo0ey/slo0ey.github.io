import { FC } from 'react';

import styled from '@emotion/styled';
import { SocialInfo } from '../../types/Common.types';

type SocialTabProps = {
  socials: SocialInfo[];
};

type SocialItemProps = {
  name: string;
  id: string;
  icon: string;
  url: string;
};

const SocialWrapper = styled.table`
  position: absolute;
  left: 16px;
  top: 228px;

  @media (max-width: 960px) {
    top: 128px;
  }

  @media (max-width: 400px) {
    top: 96px;
    left: 8px;
  }
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  display: inline;

  @media (max-width: 400px) {
    width: 16px;
    height: 16px;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #fff;

  @media (max-width: 400px) {
    font-size: 6px;
  }
`;

const SocialItem: FC<SocialItemProps> = ({ name, id, icon, url }) => {
  return (
    <tr style={{margin: '3px 0'}}>
      <SocialLink href={url}>
        <SocialIcon src={icon} alt={name} />
        {' ' + id}
      </SocialLink>
    </tr>
  );
};

const SocialTab: FC<SocialTabProps> = ({ socials }) => {
  return (
    <SocialWrapper>
      <tbody>
        {socials.map((v) => (
          <SocialItem key={v.name} name={v.name} id={v.id} icon={v.icon} url={v.url} />
        ))}
      </tbody>
    </SocialWrapper>
  );
};

export default SocialTab;
