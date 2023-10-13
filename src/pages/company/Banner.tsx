export default function Banner() {
  return (
    <section className='bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='max-w-screen-lg  sm:text-lg text-gray-400'>
          <h2 className='mb-4 text-4xl tracking-tight font-bold  text-white'>
            Esta es la nueva forma {''}
            <span className='font-extrabold'>inteligente</span> de encontrar
            talento
          </h2>
          <p className='mb-4 font-medium'>
            Koble se enfoca en ayudar a las empresas a construir su próxima
            generación de profesionales, se parte de la nueva era de la
            educación y el desarrollo profesional.
          </p>
          <a
            href='https://web.khoble.com/recruiter/signup/'
            target='_blank'
            className='inline-flex items-center font-medium text-primary-500 hover:text-primary-600'
          >
            Crea una cuenta gratis
            <svg
              className='ml-1 w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
