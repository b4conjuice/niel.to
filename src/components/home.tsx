import { socials, socialIcons } from '../lib/common'

export default function Home() {
  return (
    <main className='flex flex-grow flex-col justify-center'>
      <div className='flex flex-col items-center justify-center space-y-3 bg-[url(/img/milky.jpg)] bg-cover bg-center py-32 lg:flex-grow lg:py-0'>
        <p className='text-center leading-relaxed md:text-2xl lg:text-4xl lg:leading-10'>
          hi my name is{' '}
          <a
            className='text-cb-orange hover:text-cb-orange/75 underline'
            href='/resume'
          >
            daniel
          </a>
          <br />
          and i{' '}
          <a
            className='text-cb-yellow hover:text-cb-yellow/75 underline'
            href='/portfolio'
          >
            build
          </a>{' '}
          things.
        </p>
        <ul className='flex space-x-4'>
          {socials.map(({ name, url }) => {
            const Icon = socialIcons[name]
            return (
              <li key={name}>
                <a
                  className='flex items-center justify-center'
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {Icon && <Icon />}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
