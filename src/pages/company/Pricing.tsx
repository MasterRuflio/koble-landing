// function CheckMark() {
//   return (
//     <svg
//       className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
//       fill='currentColor'
//       viewBox='0 0 20 20'
//       xmlns='http://www.w3.org/2000/svg'
//     >
//       <path
//         fillRule='evenodd'
//         d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
//         clipRule='evenodd'
//       ></path>
//     </svg>
//   );
// }

// export default function Pricing() {
//   return (
//     <section className='bg-white dark:bg-gray-900'>
//       <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
//         <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
//           <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
//             Nuestros precios
//           </h2>
//           <p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
//             En khoble nos interesa que nuestros planes sean accesibles para todo
//             tipo de empresas, por eso tenemos planes que se adaptan a tus
//             necesidades.
//           </p>
//         </div>
//         <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
//           <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
//             <h3 className='mb-4 text-2xl font-semibold'>Publicación</h3>
//             <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
//               Mejor opción para pequeñas empresas que buscan crecer en el
//               futuro.
//             </p>
//             <div className='flex justify-center items-baseline my-8'>
//               <span className='mr-2 text-5xl font-extrabold'>$499</span>
//               <span className='text-gray-500 dark:text-gray-400'>
//                 /publicación
//               </span>
//             </div>
//             <ul role='list' className='mb-8 space-y-4 text-left'>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>
//                   Team size: <span className='font-semibold'>1 reclutador</span>
//                 </span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>Perfil de empresa</span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>Soporte</span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>Actualizaciones gratis </span>
//               </li>
//             </ul>
//             <a
//               href='#'
//               className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
//             >
//               Empieza ahora
//             </a>
//           </div>

//           <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
//             <h3 className='mb-4 text-2xl font-semibold'>Suscripción</h3>
//             <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
//               El mejor plan para empresas con un mayor numero de empleados.
//             </p>
//             <div className='flex justify-center items-baseline my-8'>
//               <span className='mr-2 text-5xl font-extrabold'>$3,999</span>
//               <span className='text-gray-500 dark:text-gray-400'>/month</span>
//             </div>

//             <ul role='list' className='mb-8 space-y-4 text-left'>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>10 Publicaciones</span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>
//                   Team size:{' '}
//                   <span className='font-semibold'>5 Reclutadores</span>
//                 </span>
//               </li>{' '}
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>Perfil de empresa</span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>Soporte</span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>Actualizaciones gratis</span>
//               </li>
//             </ul>
//             <a
//               href='#'
//               className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
//             >
//               Empieza ahora
//             </a>
//           </div>

//           <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
//             <h3 className='mb-4 text-2xl font-semibold'>Personalizado</h3>
//             <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
//               Best for large scale uses and extended redistribution rights.
//             </p>
//             <div className='flex justify-center items-baseline my-8'>
//               <span className='mr-2 text-5xl font-extrabold'>Plan</span>
//               <span className='text-gray-500 dark:text-gray-400'>/mensual</span>
//             </div>

//             <ul role='list' className='mb-8 space-y-4 text-left'>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>
//                   Número de publicaciones:{' '}
//                   <span className='font-semibold'>Negociable</span>
//                 </span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>
//                   Team size: <span className='font-semibold'>Negociable</span>
//                 </span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>Perfil de empresa</span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>Soporte</span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>Actualizaciones gratis</span>
//               </li>
//               <li className='flex items-center space-x-3'>
//                 <CheckMark />
//                 <span>Funcionalidades personalizadas</span>
//               </li>
//             </ul>
//             <a
//               href='#'
//               className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
//             >
//               Empieza ahora
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Mensual", priceSuffix: "/mes" },
  { value: "annually", label: "Anual", priceSuffix: "/año" },
];
const tiers = [
  // {
  //   name: 'Freelancer',
  //   id: 'tier-freelancer',
  //   href: '#',
  //   price: { monthly: '$15', annually: '$144' },
  //   description: 'The essentials to provide your best work for clients.',
  //   features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
  //   mostPopular: false,
  // },
  {
    name: "Freemium",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$499MXN", annually: "$499MXN" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "Funciones de Inteligencia Artificial",
      "Publicación de 1 oferta de trabajo",
      "Estadísticas básicas",
      "Límite de 85 perfiles para contactar",
      "Soporte básico",
    ],
    mostPopular: true,
  },
  {
    name: "Premium",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "$1,999MXN", annually: "$19,990" },
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Publicaciones de trabajos ilimitadas",
      "Acceso ilimitado a candidatos",
      "Analíticas avanzadas y reportes personalizados",
      "Soporte al cliente 24/7",
      "Acceso prioritario a nuevas funciones",
      "Presencia en redes sociales y eventos Koble",
      "Optimización de Talento",
      "Guía de Inserción Laboral",
    ],
    mostPopular: false,
  },
];

function classNames(...classes: (string | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Precios
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            El precio ideal para tu equipo
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-gray-300">
          Elige el plan que mejor se adapte a las necesidades de tu empresa:
          paga solo por las publicaciones que necesites o elige nuestro plan
          premium para aprovechar herramientas exclusivas en la atracción de
          talento joven.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? "bg-indigo-500" : "",
                    "cursor-pointer rounded-full px-2.5 py-1"
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        {/* <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"> */}
        <div className="isolate mx-auto mt-10 flex justify-center max-w-md gap-10 lg:mx-0 lg:max-w-none">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-white/5 ring-2 ring-indigo-500"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-white"
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.price[frequency.value as "monthly" | "annually"]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300">
                  {index === 0 ? "/publicación" : frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                )}
              >
                Comprar plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-white"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
