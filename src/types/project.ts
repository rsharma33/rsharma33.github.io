export type Project = {
  Project?: string;
  title?: string;
  description?: string;
  url?: string;
  imageSmall?: string;
  imageLarge?: string;
  tag?: string;
  techStack?: string[];
  /** Set to true to feature this project in the home page Portfolio section. */
  showOnHome?: boolean;
};

/** Open-source repo entries rendered by the Projects (cards) section. */
export type GithubProject = {
  title: string;
  description: string;
  url: string;
  demo?: string;
  tags: string[];
  fork?: boolean;
};
