// export default function Hero() {
//   return (
//     <section className='bg-gray-900 '>
//       <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
//         {/* <div className='grid grid-rows-3 grid-flow-col mb-6 '>
//           <div className='row-start-1 row-end-4 '>
//             <span className='ml-3 text-m font-medium text-gray-900 dark:text-gray-300 '>
//               Para empresas
//             </span>
//           </div>
//           <div className='row-start-1 row-end-4'>
//             <label className='relative inline-flex items-center cursor-pointer'>
//               <input type='checkbox' value='' className='sr-only peer'></input>
//               <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//             </label>
//           </div>
//           <div className='row-start-1 row-end-4'>
//             <span className='ml-3 text-m font-medium text-gray-900 dark:text-gray-300'>
//               Para estudiantes
//             </span>
//           </div>
//         </div> */}

//         <h1 className='mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white'>
//           Explora el futuro talento de tu organización
//         </h1>
//         <p className='mb-8 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400'>
//           Buscamos ayudarte a conectar a las personas que compartan tu cultura y
//           valores; no se trata de encontrar cualquier talento, si no el talento
//           especifico que tu organización requiere. Transforma tu empresa
//           mediante la tecnología y la inteligencia artificial con Khoble.
//         </p>
//         <div className='flex flex-col mb-4  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
//           <a
//             href='https://web.khoble.com/recruiter/signup/'
//             target='_blank'
//             className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border  hover:bg-gray-100 focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800'
//           >
//             Regístrame gratis
//           </a>
//         </div>
//       </div>
//       <div>
//         <img
//           className='h-auto w-9/12 rounded-lg mx-auto'
//           src='/images/image-hero.png'
//           alt=''
//         ></img>
//       </div>
//       {/* </div>
//       <img
//         className='h-auto max-w-lg rounded-lg'
//         src='/images/image-hero.png'
//         alt='image description'
//       ></img> */}
//     </section>
//   );
// }

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate pt-5">
      {/* <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg> */}
      <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-25rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
        <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style={{clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",}}></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 animate-fade-right animate-duration-[1400ms] animate-delay-200 animate-ease-in-out animate-normal animate-fill-both">
          {/* <img className="h-11" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">What's new</span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span>Just shipped v1.0</span>
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </span>
            </a>
          </div> */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Conecta con la nueva generación de talento con Koble</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">Impulsa el crecimiento de tu empresa con el talento emergente. Con Koble, tienes acceso a una red diversa de estudiantes y recién graduados que comparten tu cultura y valores.</p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://web.khoble.com/switch/signup">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-500/95 to-rose-500/95 group-hover:from-indigo-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="transition-all ease-in-out duration-500 relative px-10 py-3 tracking-wide bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Regístrate
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32 animate-fade-left animate-duration-[1400ms] animate-delay-200 animate-ease-in-out animate-normal animate-fill-both">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="App screenshot" width="2432" height="1442" className="w-[62rem] rounded-lg bg-white/5 shadow-2xl ring-1 ring-white/10"/>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
