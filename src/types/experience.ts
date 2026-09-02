export type Role = {
  designation: string;
  tenure: string;
  location: string;
  highlights: string[];
  skills: string[];
};

export type Experience = {
  company: string;
  companyFull: string;
  employmentType: string;
  tenure: string;
  current: boolean;
  roles: Role[];
};
