export type ArmyTimerInfo = {
  format: string;
  end: string;
};

export type SocialInfo = {
  name: string;
  id: string;
  icon: string;
  url: string;
};

export type Introduction = {
  title: string;
  subtitle: string[];
  army_timer: ArmyTimerInfo;
  socials: SocialInfo[];
};
