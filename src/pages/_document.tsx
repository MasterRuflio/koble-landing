import { Html, Main, Head, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='Koble es el lugar ideal para comenzar tu carrera sin necesidad de experiencia previa, conexiones o suerte. 
          Nos enfocamos en conectar a los estudiantes no solo con trabajos bien remunerados, sino también con oportunidades que se alinean con sus pasiones e intereses, fomentando un compromiso duradero de los empleados y la retención de talento. Nuestra interfaz inspirada en Airbnb permite a los estudiantes explorar ofertas de trabajo mientras que las empresas buscan talento potencial.'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
      </body>
    </Html>
  );
}
