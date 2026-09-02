export type Skill = {
  name: string;
  level: string;
  icon?: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};
