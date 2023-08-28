import { Image } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';

const Intro = () => {
  const darkMode = useDarkMode();
  return (
    <section className='p-9 flex flex-row flex-wrap w-full gap-12 content-center justify-center mb-12'>
      <h1 className='flex text-3xl sm:text-5xl md:text-5xl italic w-full justify-center mb-2 text-success font-medium'>
        Ángel Bolado Carletti
      </h1>
      <div className='flex flex-col-reverse md:flex-row gap-12'>
        <div className='flex flex-col flex-1 h-auto justify-center'>
          <p className='pb-4'>
            Ingeniero informático graduado por la Universidad de Cantabria con 8
            años de experienca y actualmente trabajando como senior backend
            developer.
          </p>
          <p className='pb-4'>
            Durante mis horas de trabajo uso tecnologías como Java, SpringBoot,
            RabbitMQ, PostgreSQL, Kubernetes... pero la magia empieza cuando
            salgo del trabajo. Normalmente suelo hacer algo de deporte, pero
            después siempre intento aprender algo nuevo. Alguna de las
            tecnologías que he aprendido hasta la fecha son: TypeScript, React
            Native, React, Next.js, Vite, Node, Nest.js...
          </p>
        </div>
        <div className='flex flex-col flex-1 items-center self-center'>
          <Image
            className={`${darkMode.value ? 'grayscale' : ''}`}
            width={600}
            height={400}
            src='/src/assets/images/portada.webp'
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
