export type Next_Page_Url = string;

export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'
  | 'no-color';

export interface IProject {
  title: string;
  year: string;
  description: string;
  features: string;
  technicalAspects: string;
  role: string;
  techStack: string[];
  thumbnail: string;
  examples: Array<{
    image: string;
    url: string;
  }>;
  slug: string;
  liveUrl?: string;
  sourceCode?: string;
}

export interface ITech {
  key: string;
  name: string;
  icon: string;
  order: number;
  description: {
    text: string;
    years: string;
    project: string;
  };
}

export interface IData {
  generalInfo: {
    email: string;
    emailSubject: string;
    emailBody: string;
  };
  socialLinks: Array<{
    name: string;
    url: string;
  }>;
  myStack: {
    frontend: ITech[];
    backend: ITech[];
    database: ITech[];
    tools: ITech[];
  };
  projects: IProject[];
  myExperience: Array<{
    title: string;
    company: string;
    duration: string;
  }>;
  ui: {
    navbar: {
      links: Array<{ name: string; url: string }>;
      socialTitle: string;
      menuTitle: string;
      contactTitle: string;
    };
    banner: {
      role: string;
      description: string; // HTML string allowed
      contactButton: string;
      yearsExperience: string;
      yearsText: string;
      hoursWorked: string;
      hoursText: string;
    };
    aboutMe: {
      title: string;
      subtitle: string;
      introTitle: string;
      introDescription1: string;
      introDescription2: string;
    };
    titles: {
      myStack: string;
      experience: string;
      selectedProjects: string;
    };
    techModal: {
      experience: string;
      projects: string;
      button: string;
    };
    generic: {
      back: string;
      techs: string;
      description: string;
      features: string;
      technicalAspects: string;
      myRole: string;
      design: string;
      pleasure: string;
    };
  };
}
