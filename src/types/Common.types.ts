type ArmyTimerInfo = {
  format: string;
  end: string;
};

type SocialInfo = {
  name: string;
  id: string;
  icon: string;
};

export type Introduction = {
  title: string;
  subtitle: string[];
  army_timer: ArmyTimerInfo;
};
