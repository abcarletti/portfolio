import BookIcon from '@assets/icons/book';
import CodeIcon from '@assets/icons/code';
import DotsIcon from '@assets/icons/dots';
import PlayIcon from '@assets/icons/play';
import TrophyIcon from '@assets/icons/trophy';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

const Timeline = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full p-4 mb-8'>
      <h3 className='text-4xl font-semibold mb-6 ml-3'>Trayectoria</h3>

      <div className='container mx-auto w-full h-full'>
        <div className='relative wrap overflow-hidden h-full'>
          <div
            className='border-2-2 hidden md:block absolute border-opacity-20 border-gray-400 h-full border'
            style={{ left: '50%' }}
          ></div>

          <div className='mb-8 flex justify-between md:items-center w-full '>
            <div className='md:order-1 md:w-5/12'></div>
            <div className='z-20 flex items-center md:order-1 text-green-100 bg-green-800 p-2 rounded-full'>
              <PlayIcon />
            </div>
            <div className='md:order-1 md:w-5/12'></div>
          </div>

          <div className='mb-8 flex gap-2 justify-between items-center w-full '>
            <div className='md:order-1 md:w-5/12'></div>
            <div className='z-20 flex items-center md:order-1 text-amber-100 bg-amber-800 p-2 rounded-full'>
              <BookIcon />
            </div>
            <Card className='z-20 shadow-none flex items-center gap-2 md:order-1 md:w-5/12 text-amber-800 bg-amber-100'>
              <CardHeader className='flex gap-3'>
                <div className='flex flex-col'>
                  <p className='text-md font-semibold'>
                    Grado en Ingeniería Informática
                  </p>
                  <p className='text-small text-amber-600'>2010 - 2019</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className='mb-2 text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Mención en Ingeniería de computadores.
                </p>
                <p className='text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Fecha de finalización en 2019 porque empecé a trabajar antes
                  de tener aprobadas todas las asignaturas y pospuse la entrega
                  del proyecto final.
                </p>
              </CardBody>
            </Card>
          </div>

          <div className='mb-8 flex gap-2 md:flex-row-reverse justify-between items-center w-full '>
            <div className='md:order-1 md:w-5/12'></div>
            <div className='z-20 flex items-center md:order-1 text-amber-100 bg-amber-800 p-2 rounded-full'>
              <BookIcon />
            </div>
            <Card className='z-20 shadow-none flex w-full items-center md:order-1 md:w-5/12 text-amber-800 bg-amber-100'>
              <CardHeader className='flex gap-3'>
                <div className='flex flex-col'>
                  <p className='text-md font-semibold'>
                    Oracle Certified Associate, Java SE 8 Programmer
                  </p>
                  <p className='text-small text-amber-600'>may. 2018</p>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className='mb-8 flex gap-2 justify-between items-center w-full left-timeline'>
            <div className='md:order-1 md:w-5/12'></div>
            <div className='z-20 flex items-center md:order-1 text-purple-100 bg-purple-800 p-2 rounded-full'>
              <CodeIcon />
            </div>
            <Card className='z-20 shadow-none flex items-center md:order-1 md:w-5/12 text-purple-800 bg-purple-100'>
              <CardHeader className='flex gap-3'>
                <div className='flex flex-col'>
                  <p className='text-md font-semibold'>
                    CIC Consulting informático
                  </p>
                  <p className='text-small text-purple-600'>
                    abr. 2015 - dic. 2019
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <p className='mb-2 text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Empecé a trabajar aquí antes de graduarme, compaginado con mis
                  estudios.
                </p>
                <p className='mb-2 text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Mi trabajo consistía en desarrollar aplicaciones web con Java,
                  Spring, Hibernate...para una empresa del sector energético.
                </p>
                <p className='mb-2 text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Durante los 4 años y 9 meses que estuve en la empresa creci
                  mucho profesionalmente hasta convertirme en un desarrollador
                  senior.
                </p>
                <p className='text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Trabaje con clientes importantes, destacando el Gobierno de
                  Cantabria, administración electrónica, y el sistema de
                  SmartCity para una importante capital europea.
                </p>
              </CardBody>
            </Card>
          </div>

          <div className='mb-8 flex gap-2 md:flex-row-reverse justify-between items-center w-full left-timeline'>
            <div className='md:order-1 md:w-5/12'></div>
            <div className='z-20 flex items-center md:order-1 text-emerald-100 bg-emerald-800 p-2 rounded-full'>
              <TrophyIcon />
            </div>
            <Card className='z-20 shadow-none flex items-center md:order-1 md:w-5/12 text-emerald-800 bg-emerald-100'>
              <CardHeader className='flex gap-3'>
                <div className='flex flex-col'>
                  <p className='text-md font-semibold'>
                    Ganador V Hack2Progress
                  </p>
                  <p className='text-small text-emerald-600'>nov. 2019</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className='text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Junto a tres amigos más participamos en el V Hack2Progress,
                  organizado por CIC Consulting Informática y la Universidad de
                  Cantabria. Desarrollamos una aplicacion movil multidispositivo
                  en 24 horas que resolviese alguno de los problemas de los
                  objetivos de desarrollo sostenible de la ONU para 2030.
                </p>
              </CardBody>
            </Card>
          </div>

          <div className='mb-8 flex gap-2 justify-between items-center w-full left-timeline'>
            <div className='md:order-1 md:w-5/12'></div>
            <div className='z-20 flex items-center md:order-1 text-purple-100 bg-purple-800 p-2 rounded-full'>
              <CodeIcon />
            </div>
            <Card className='z-20 shadow-none flex items-center md:order-1 md:w-5/12 text-purple-800 bg-purple-100'>
              <CardHeader className='flex gap-3'>
                <div className='flex flex-col'>
                  <p className='text-md font-semibold'>GFI - Inetum</p>
                  <p className='text-small text-purple-600'>
                    ene. 2020 - mar. 2021
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <p className='text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Amplié mi experiencia profesional trabajando como Analista
                  programador para un importante cliente del sector bancario, el
                  Banco Santander. Durante ese periodo trabajé en dos proyectos,
                  en uno estaba solo y en otro con otra persona. En ambos
                  proyectos trabajé con Java, SpringBoot, Angular...Mis tareas
                  consistian en desarrollar nuevas funcionalidades y corregir
                  errores.
                </p>
              </CardBody>
            </Card>
          </div>

          <div className='mb-8 flex gap-2 md:flex-row-reverse justify-between items-center w-full left-timeline'>
            <div className='md:order-1 md:w-5/12'></div>
            <div className='z-20 flex items-center md:order-1 text-purple-100 bg-purple-800 p-2 rounded-full'>
              <CodeIcon />
            </div>
            <Card className='z-20 shadow-none flex items-center md:order-1 md:w-5/12 text-purple-800 bg-purple-100'>
              <CardHeader className='flex gap-3'>
                <div className='flex flex-col'>
                  <p className='text-md font-semibold'>
                    CIC Consulting informático
                  </p>
                  <p className='text-small text-purple-600'>
                    mar. 2021 - mar. 2023
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <p className='mb-2 text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  CIC me volvió a abrir las puertas como Analista programador y
                  confió en mi para crear un proyecto de eficiencia energética
                  para una gran empresa española de telecomunicaciones.
                </p>
                <p className='mb-2 text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  En este proyecto trabajé con Java, SpringBoot, RabbitMQ,
                  PostgreSQL, Kubernetes... y mi trabajo consistía en analizar
                  los nuevos requerimientos y proponer la mejor solución.
                </p>
                <p className='mb-2 text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Durante este tiempo que estuve fuí mejorando mis habilidades
                  hasta llegar a ser Analista senior (jefe de equipo) y tener
                  una persona a mi cargo.
                </p>
              </CardBody>
            </Card>
          </div>

          <div className='mb-8 flex gap-2 justify-between items-center w-full '>
            <div className='md:order-1 md:w-5/12'></div>
            <div className='z-20 flex items-center md:order-1 text-amber-100 bg-amber-800 p-2 rounded-full'>
              <BookIcon />
            </div>
            <Card className='z-20 shadow-none flex items-center md:order-1 md:w-5/12 text-amber-800 bg-amber-100'>
              <CardHeader className='flex gap-3'>
                <div className='flex flex-col'>
                  <p className='text-md font-semibold'>
                    Programa avanzado en Agile Project Management. SCRUM.
                  </p>
                  <p className='text-small text-amber-600'>
                    nov. 2022 - ene. 2023
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <p className='text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Programa de formación de ámbito estatal, para la adquisición y
                  mejora de competencias profesionales relacionadas con los
                  cambios tecnológicos
                </p>
              </CardBody>
            </Card>
          </div>

          <div className='mb-8 flex gap-2 md:flex-row-reverse justify-between items-center w-full '>
            <div className='md:order-1 md:w-5/12'></div>
            <div className='z-20 flex items-center md:order-1 text-amber-100 bg-amber-800 p-2 rounded-full'>
              <BookIcon />
            </div>
            <Card className='z-20 shadow-none flex w-full items-center md:order-1 md:w-5/12 text-amber-800 bg-amber-100'>
              <CardHeader className='flex gap-3'>
                <div className='flex flex-col'>
                  <p className='text-md font-semibold'>
                    Scrum Master Certified (SMC)
                  </p>
                  <p className='text-small text-amber-600'>ene. 2023</p>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className='mb-8 flex gap-2 justify-between items-center w-full left-timeline'>
            <div className='md:order-1 md:w-5/12'></div>
            <div className='z-20 flex items-center md:order-1 text-purple-100 bg-purple-800 p-2 rounded-full'>
              <CodeIcon />
            </div>
            <Card className='z-20 shadow-none flex items-center md:order-1 md:w-5/12 text-purple-800 bg-purple-100'>
              <CardHeader className='flex gap-3'>
                <div className='flex flex-col'>
                  <p className='text-md font-semibold'>Logixs</p>
                  <p className='text-small text-purple-600'>
                    mar. 2023 - actualidad
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <p className='mb-2 text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Me aventuré a emprender una nueva aventura con esta empresa
                  que me ofrecía un puesto de Senior Backend Developer. En esta
                  empresa trabajo con Java, SpringBoot, RabbitMQ, PostgreSQL, y
                  mi trabajo consiste en desarrollar nuevas funcionalidades y
                  mantener una aplicación para la fábrica nacional de moneda y
                  timbre.
                </p>
                <p className='text-sm font-medium leading-snug tracking-wide text-opacity-100'>
                  Además, he desarrollado de 0 una API para una aplicación móvil
                  y un CMS para una empresa de seguros. En este proyecto he
                  trabajado tecnologias como Java, SpringBoot, PostgreSQL,
                  Docker, Firebase, Google Cloud. Algo destacable de este
                  proyecto es que es la integracion con el servicio de TERRA
                  para conectar dispositivos Fitbit y obtener los datos de
                  actividad fisica y sueño de los usuarios a través de un
                  webhook, casi en tiempo real.
                </p>
              </CardBody>
            </Card>
          </div>

          <div className='flex justify-between items-end w-full '>
            <div className='order-1 w-5/12'></div>
            <div className='z-20 flex items-end order-1 text-teal-100 bg-teal-800 p-2 rounded-full'>
              <DotsIcon />
            </div>
            <div className='order-1 w-5/12'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
