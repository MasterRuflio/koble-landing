import { useState } from 'react';
export default function SwitchNavbar({
  setVersion,
  version,
}: {
  setVersion: (version: string) => void;
  version: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`bg-transpatent relative w-full top-0 left-0 top-0 z-50 ${version === 'company' ? 'bg-gray-900' : ''} `}>
      <div className='max-w-screen-xl flex flex-wrap justify-around items-center lg:justify-between mx-auto px-2 py-7 sm:p-7'>
        <ul className='flex items-center space-x-4 sm:space-x-8 lg:flex'>
          <li className='mr-1 sm:mr-10'>
            <a href='#' className='flex items-center cursor-pointer'
            onClick={(e) => {
              e.preventDefault(); // To prevent navigation due to the href='#'
              setVersion('student');
            }}
            >
          <img src={version === 'company' ? "/images/khoble_magenta_white.svg" : "images/khoble_magenta_blue.svg"} alt="Koble logo" className='w-12 sm:w-16 mr-0 sm:mr-1'/>
              {/* <span className='self-center text-3xl font-semibold whitespace-nowrap text-gray-900'> */}
              <span className={`self-cener text-2xl sm:text-3xl font-semibold whitespace-nowrap text-gray-900 ${version === 'company' ? 'text-white' : ''}`}>
                Koble
              </span>
            </a>
          </li>
          <li>
            <a
              aria-label='Client type'
              title='Client type'
              className={`transition duration-500 ease-in-out cursor-pointer font-medium text-sm sm:text-base tracking-wide rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 
              ${version === 'company' ? 'text-slate-500' : 'bg-slate-200 text-slate-900'} transition-all duration-500`}
              onClick={() => setVersion('student')}
            >
              Estudiante
            </a>
          </li>
          <li>
            <a
              aria-label='Client type'
              title='Client type'
              className={`transition duration-500 ease-in-out cursor-pointer font-medium text-sm sm:text-base tracking-wide rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 
              ${version !== 'company' ? 'bg-transparent text-slate-500' : 'bg-slate-200 text-slate-900'} transition-all duration-500`}
              onClick={() => setVersion('company')}
            >
              Empresa
            </a>
          </li>
        </ul>
        <div className='flex md:order-2'>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <a
                target='_blank'
                title='About us'
                href='https://web.khoble.com/switch'
                className={`flex transition-all ease-in-out duration-500 font-medium tracking-wide rounded-lg px-5 py-3 text-slate-900 hover:text-slate-600 hover:translate-x-1
                ${version === 'company' ? 'text-white' : ''} transition-all duration-500`}
              >
                <span>Iniciar Sesión</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="ml-1.5 w-4 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://web.khoble.com/switch/signup">
                <button className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium rounded-lg group bg-gradient-to-br from-indigo-500/95 to-rose-500/95 group-hover:from-indigo-500 group-hover:to-pink-500 hover:text-white text-gray-900 focus:ring-4 focus:outline-none focus:ring-purple-200 focus:ring-purple-800 ${version === 'company' ? 'text-white' : ''} `}>
                  <span className={`transition-all ease-in-out duration-500 relative px-12 py-3 tracking-wide bg-white rounded-md group-hover:bg-opacity-0 ${version === 'company' ? 'dark:bg-gray-900' : ''} `}>
                    Regístrate
                  </span>
                </button>
              </a>
            </li>
          </ul>
        </div>
        {/* Small screen */}
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-0 transition duration-200 rounded focus:outline-none focus:shadow-outline'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-4 md:w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full'>
              <div className={`p-5 border rounded shadow-sm ${version === 'company' ? 'bg-white' : 'bg-black'} `}>
                <div className='flex items-center justify-between mb-2'>
                  <div>
                    <a
                      href='#'
                      aria-label='Company'
                      title='Company'
                      className='inline-flex items-center'
                    >
                      <img src={version === 'company' ? "/images/khoble_magenta_blue.svg" : "/images/khoble_magenta_white.svg"} alt="Koble logo" className='w-10 sm:w-16 mr-1'/>
                      <span className={`ml-2 text-xl md:text-3xl font-bold tracking-wide ${version === 'company' ? 'text-black' : 'text-white'} `}>
                        Koble
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={`w-full h-0.5 mb-8 mx-auto ${version === 'company' ? 'bg-black' : 'bg-white'} `}></div>
                <nav>
                  <ul className='space-y-6 flex flex-col justify-center mb-3'>
                    <li className='text-center'>
                      <a
                        href='https://web.khoble.com/switch/'
                        title='About us'
                        target='_blank'
                        className={`text-sm sm:text-xl tracking-wide transition-colors duration-200 hover:bg-gray-100 ${version === 'company' ? 'text-black' : 'text-white'} `}
                      >
                        Iniciar Sesión
                      </a>
                    </li>
                    <li className='text-center'>
                      <a href="https://web.khoble.com/switch/signup">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm sm:text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-500/95 to-rose-500/95 group-hover:from-indigo-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                          <span className="transition-all ease-in-out duration-500 relative px-16 md:px-20 py-3 tracking-wide bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Regístrate
                          </span>
                        </button>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
