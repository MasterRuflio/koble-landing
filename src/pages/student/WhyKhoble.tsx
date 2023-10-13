export default function WhyKhoble() {
  return (
    <section className='bg-gray-900'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light sm:text-lg text-gray-400'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>
            ¿Por qué Khoble?
          </h2>
          <p className='mb-4'>
            No somos solo una startup; estamos aquí para remodelar el mercado
            laboral tal como lo conocemos. Nuestro objetivo es crear un entorno
            colaborativo en el que las empresas y los colaboradores se unan para
            garantizar la satisfacción de ambas partes, en lugar de solo una. De
            un lado queremos ayudar a los estudiantes a ir más allá de
            simplemente seguir un proceso para conseguir un empleo y, en cambio,
            brindarles una experiencia que les permita descubrir en qué son
            buenos, recibir el salario que merecen y, lo más importante,
            encontrar un trabajo que realmente les guste.
          </p>
          <p>
            Paralelamente, apoyamos a las empresas en su camino hacia un enfoque
            más centrado en las personas, desmantelando la burocracia y
            empoderando a los colaboradores para liberarse de las trayectorias
            profesionales tradicionales. Esto lleva a la creación de
            organizaciones más fuertes y cohesionadas.
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
