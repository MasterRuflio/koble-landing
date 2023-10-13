// export default function HowToStart() {
//   const features = [
//     {
//       icon: (
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           fill='none'
//           viewBox='0 0 24 24'
//           strokeWidth={1.5}
//           stroke='currentColor'
//           className='w-6 h-6'
//         >
//           <path
//             strokeLinecap='round'
//             strokeLinejoin='round'
//             d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
//           />
//         </svg>
//       ),
//       title: 'Crea tu Perfil',
//       desc: 'Construye tu perfil alineado con tus intereses, habilidades. y experiencia',
//     },
//     {
//       icon: (
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           fill='none'
//           viewBox='0 0 24 24'
//           strokeWidth={1.5}
//           stroke='currentColor'
//           className='w-6 h-6'
//         >
//           <path
//             strokeLinecap='round'
//             strokeLinejoin='round'
//             d='M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3'
//           />
//         </svg>
//       ),
//       title: 'Busca',
//       desc: 'Explora oportunidades que te resuenen',
//     },
//     {
//       icon: (
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           fill='none'
//           viewBox='0 0 24 24'
//           strokeWidth={1.5}
//           stroke='currentColor'
//           className='w-6 h-6'
//         >
//           <path
//             strokeLinecap='round'
//             strokeLinejoin='round'
//             d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
//           />
//         </svg>
//       ),
//       title: '¿Encontraste tu trabajo ideal?',
//       desc: 'Inicia tu descubrimiento… Aplica si es que todavía no te encontraron antes ;)',
//     },
//   ];

//   return (
//     <section className='relative py-28 bg-gray-900'>
//       <div className='relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8'>
//         <div className='max-w-xl'>
//           <h3 className='text-white text-3xl font-semibold sm:text-4xl'>
//             ¿Cómo puedo empezar?
//           </h3>
//           <p className='mt-3'></p>
//         </div>
//         <div className='mt-12 lg:mt-0'>
//           <ul className='grid gap-8 sm:grid-cols-2'>
//             {features.map((item, idx) => (
//               <li key={idx} className='flex gap-x-4'>
//                 <div className='flex-none w-12 h-12 bg-gray-700 text-white-500 rounded-lg flex items-center justify-center'>
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h4 className='text-lg text-gray-100 font-semibold'>
//                     {item.title}
//                   </h4>
//                   <p className='mt-3'>{item.desc}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div
//         className='absolute inset-0 max-w-md mx-auto h-72 blur-[118px]'
//         style={{
//           background:
//             'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
//         }}
//       ></div>
//     </section>
//   );
// }

export default function HowToStart() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-10">
          {/* Background image */}
          <img src="https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center saturate-0 mix-blend-multiply"/>
          {/* Polygon shape 1*/}
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
          </div>
          {/* Polygon shape 2 */}
          <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[18rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
          </div>
          {/* Title */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto lg:mx-0 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Encuentra trabajo estilo Kobler</h2>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">en cinco pasos</h2>
            </div>
            {/* Steps */}
            <div className="mx-auto mt-20 flex flex-col sm:px-10">
              {/* Step 1 */}
              <div className="w-1/3 overflow-hidden">
                <div className="bg-white/5 rounded-2xl ring-1 ring-white/10 ring-inset p-4">
                  <h3 className="w-min text-3xl font-normal text-white sm:text-4xl">1.</h3>
                  <h3 className="mt-2 text-xl font-semibold text-gray-100 sm:text-lg">Regístrate <span className="font-normal text-gray-300">como estudiante</span></h3>
                </div>
              </div>
              {/* Step 2 */}
              <div className="self-end w-1/3 overflow-hidden">
                <div className="bg-white/5 rounded-2xl ring-1 ring-white/10 ring-inset p-4">
                  <h3 className="text-3xl font-normal text-white sm:text-4xl">2.</h3>
                  <h3 className="mt-2 text-base font-semibold text-gray-100 sm:text-lg">Crea tu perfil <span className="font-normal text-gray-300">y encuentra</span></h3>
                  <h3 className="text-xl font-normal text-gray-300 sm:text-lg">recomendaciones de trabajo personalizadas.</h3>
                </div>
              </div>
              {/* Step 3 */}
              <div className="w-1/3 overflow-hidden">
                <div className="bg-white/5 rounded-2xl ring-1 ring-white/10 ring-inset p-4">
                  <h3 className="text-3xl font-normal text-white sm:text-4xl">3.</h3>
                  <h3 className="mt-2 text-base font-semibold text-gray-100 sm:text-lg">Aplica a puestos</h3>
                  <h3 className="text-xl font-normal text-gray-300 sm:text-lg">o recibe invitaciones de</h3>
                  <h3 className="text-xl font-normal text-gray-300 sm:text-lg">empleadores.</h3>
                </div>
              </div>
              {/* Step 4 */}
              <div className="self-end w-1/3 overflow-hidden">
                <div className="bg-white/10 rounded-2xl ring-1 ring-white/10 ring-inset p-4">
                  <h3 className="text-3xl font-normal text-white sm:text-4xl">4.</h3>
                  <h3 className="mt-2 text-base font-semibold text-gray-100 sm:text-lg">Chatea con los empleadores</h3>
                  <h3 className="text-xl font-normal text-gray-300 sm:text-lg">para preguntar y conocer</h3>
                  <h3 className="text-xl font-normal text-gray-300 sm:text-lg">detalles.</h3>
                </div>
              </div>
              {/* Step 5 */}
              <div className="w-1/3 overflow-hidden">
                <div className="bg-white/5 rounded-2xl ring-1 ring-white/10 ring-inset p-4">
                  <h3 className="text-3xl font-normal text-white sm:text-4xl">5.</h3>
                  <h3 className="mt-2 text-base font-normal text-gray-300 sm:text-lg">Recibe tu</h3>
                  <h3 className="text-xl font-normal text-gray-300 sm:text-lg">oferta y <span className="font-semibold text-gray-100">acepta.</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
