export default function WhyKhoble() {
  return (
    <section className='bg-gray-900'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light sm:text-lg text-gray-400'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>
            ¿Por qué Khoble?
          </h2>
          <p className='mb-4'>
            Nuestra estrategia se centra en tres pilares fundamentales: 1)
            mejorar la retención en las empresas, 2) reducir la desconexión
            entre los colaboradores y 3) fomentar un ambiente colaborativo
            durante el proceso de reclutamiento, para ayudar a las empresas a
            encontrar y contratar a estudiantes que se ajusten a su identidad y
            cultura, además de contar con habilidades específicas. También
            brindamos a los estudiantes la oportunidad de descubrir sus talentos
            y conectarse con empresas, para encontrar trabajos bien remunerados
            y apasionantes.
          </p>
          <p>
            Reconocemos que cada organización es única, por lo que nos
            esforzamos por proporcionar herramientas personalizadas que ayuden a
            encontrar al candidato ideal, no solo por sus habilidades, sino
            también por su compatibilidad con la empresa. Para lograrlo,
            planeamos implementar inteligencia artificial y aprendizaje
            automático, para simplificar y automatizar los procesos actuales y
            mejorar la búsqueda para ambas partes. Al conectar a empresas y
            candidatos, podemos contribuir a la construcción de organizaciones
            sólidas y cohesionadas
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <img
            className='w-full rounded-lg'
            src='https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='office content 1'
          />
          <img
            className='mt-4 w-full lg:mt-10 rounded-lg'
            src='https://images.pexels.com/photos/4069290/pexels-photo-4069290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='office content 2'
          />
        </div>
      </div>
    </section>
  );
}
