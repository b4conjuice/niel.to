import { GithubIcon, LinkedInIcon } from '../components/icons'

export const DEFAULT_TITLE = 'hi my name is daniel'

export const nav = [
  {
    url: '/',
    text: 'home',
  },
  {
    url: '/resume',
    text: 'resume',
  },
  {
    url: '/portfolio',
    text: 'portfolio',
  },
]

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
  linkedin: LinkedInIcon,
  github: GithubIcon,
}
