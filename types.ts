
export interface Project {
  id: string;
  title: string;
  roi: string;
  category: string;
  image: string;
  description: string;
  bgColor: string;
  objectPosition?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
