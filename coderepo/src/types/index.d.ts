import { Icon } from "@/components/Icons";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    karloPage: string;
    antonioPage: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
};

export type MainNavItem = NavItem;

export type ExampleProjectItem = {
  title: string;
  description: string;
  href: string;
  github: string;
};

export type TechnologyItem = {
  title: string;
  description: string;
  icon: Icon;
};

export type MainConfig = {
  mainNav: MainNavItem[];
  exampleProjects: ExampleProjectItem[];
  technologies: TechnologyItem[];
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};
