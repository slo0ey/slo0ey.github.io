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
  float: right;
  top: 192px;
`;

const SocialIcon = styled.img`
  width: 64px;
  height: 64px;
  display: inline;
`;

const SocialLink = styled.a`
  width: 104px;
  height: 64px;
  display: inline;
  text-decoration: none;
  color: #fff;
`;

const SocialItem: FC<SocialItemProps> = ({ name, id, icon, url }) => {
  return (
    <tr>
      <SocialIcon src={icon} alt={name} />
      <SocialLink href={url}>{id}</SocialLink>
    </tr>
  );
};

const SocialTab: FC<SocialTabProps> = ({ socials }) => {
  return (
    <SocialWrapper>
      {socials.map((v) => (
        <SocialItem key={v.name} name={v.name} id={v.id} icon={v.icon} url={v.url} />
      ))}
    </SocialWrapper>
  );
};

export default SocialTab;
