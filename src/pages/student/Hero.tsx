// export default function Hero() {
//   return (
//     <section className='bg-gray-900'>
//       <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
//         <h1 className='mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white'>
//           Comienza el viaje para encontrar tu pasión y propósito
//         </h1>
//         <p className='mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-38 text-gray-400'>
//           En Khoble, creemos que cada persona debería tener la oportunidad de
//           encontrar su propósito único y satisfactorio y hacer un impacto
//           significativo en el mundo. Por lo tanto, te guiamos a encontrar una
//           misión única donde podrás maximizar tu creatividad, competencia,
//           colaboración y compromiso para redefinir tu trayectoria y alcanzar tu
//           máximo potencial.
//         </p>
//         <div className='flex flex-col mb-4  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
//           <a
//             href='https://web.khoble.com/student/signup/'
//             target='_blank'
//             className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border  focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800'
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
//     </section
//   );
// }

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-5">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",}}></div>
        </div>
        <div className="py-16 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 animate-fade-down animate-once animate-duration-[1400ms] animate-delay-200 animate-ease-in-out animate-normal animate-fill-both">Comienza el viaje para encontrar tu pasión y propósito</h1>
              <p className="mt-10 text-base sm:text-xl leading-8 text-gray-600 animate-fade-up animate-once animate-duration-[1400ms] animate-delay-[200ms] animate-ease-in-out animate-normal animate-fill-both">Koble es un startup que ayuda a estudiantes y recién graduados a encontrar trabajos óptimos para ellos. Usamos tecnología avanzada para emparejar habilidades y metas personales con las mejores oportunidades.</p>
              <div className="mt-12 flex items-center justify-center gap-x-6">
                <a href="https://web.khoble.com/switch/signup">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm sm:text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-500/95 to-rose-500/95 group-hover:from-indigo-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="transition-all ease-in-out duration-500 relative px-8 sm:px-10 py-3 tracking-wide bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 animate-pulse animate-infinite animate-duration-[4500ms] animate-ease-linear">
                      Regístrate
                    </span>
                  </button>
                </a>
                {/* <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Regístrate</a> */}
                {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a> */}
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[500ms] animate-ease-in-out animate-normal animate-fill-both">
                <img src="./images/image-hero-2.png" alt="App screenshot" className="rounded-lg shadow-2xl ring-1 ring-gray-900/10"/>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"> */}
        {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-43rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",}}></div>
        </div> */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(116%-43rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",}}></div>
        </div>
      </div>
    </div>
  );
}
