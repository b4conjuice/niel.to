import {
  Github,
  LinkedIn,
  Home,
  DocumentText,
  Briefcase,
} from '@/components/icons'

export const DEFAULT_TITLE = 'hi my name is daniel'

export const nav = [
  {
    url: '/',
    text: 'home',
    Icon: Home,
  },
  {
    url: '/resume',
    text: 'resume',
    Icon: DocumentText,
  },
  {
    url: '/portfolio',
    text: 'portfolio',
    Icon: Briefcase,
  },
]

export const navIcons: Record<string, () => React.JSX.Element> = {
  home: Home,
  resume: DocumentText,
  portfolio: Briefcase,
}

export const socials = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/d4niellopez',
  },
  {
    name: 'github',
    url: 'https://github.com/b4conjuice',
  },
]

export const socialIcons: Record<string, () => React.JSX.Element> = {
  linkedin: LinkedIn,
  github: Github,
}
