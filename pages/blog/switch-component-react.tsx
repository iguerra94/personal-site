import Image from 'next/image'
import Link from 'next/link'

const Article = () => {
  return (
    <>
      <h2 className="text-xl font-bold selection:bg-yellow-300">
        Construir un componente Switch en React
      </h2>

      <span className="text-sm selection:bg-yellow-300">
        {'#react #vite.js #css'}
      </span>

      <div className="mt-4 mb-12 max-w-fit space-y-2 bg-slate-200 p-3">
        <h3 className="font-semibold selection:bg-yellow-300">Índice</h3>

        <ul className="flex flex-col space-y-2">
          <Link href="#introduccion">
            <a className="text-sm selection:bg-yellow-300">
              - <span className="underline">Introducción</span>
            </a>
          </Link>

          <Link href="#setup-proyecto">
            <a className="text-sm selection:bg-yellow-300">
              - <span className="underline">Setup del proyecto</span>
            </a>
          </Link>

          <Link href="#construyendo-componente">
            <a className="text-sm selection:bg-yellow-300">
              -{' '}
              <span className="underline">
                Construcción del componente (sin refactorizar)
              </span>
            </a>
          </Link>

          <Link href="#refactorizando-componente">
            <a className="text-sm selection:bg-yellow-300">
              -{' '}
              <span className="underline">
                Refactorizar el componente para poder reutilizarlo
              </span>
            </a>
          </Link>
        </ul>
      </div>

      <section id="introduccion" className="mb-12 space-y-4">
        <p className="text-xl font-bold">Introducción</p>

        <p>
          En este artículo construiremos el famoso componente{' '}
          <b>Switch en React</b>, que es un componente utilizado comunmente para
          activar 1 de 2 opciones predefinidas.
        </p>

        <p className="flex flex-col">
          <span className="mb-5">El resultado final será el siguiente:</span>
          <span className="max-w-[291px] border border-gray-800       ">
            <Image
              src="/images/switch-component-final.png"
              width="291px"
              height="427px"
              objectFit="cover"
            />
          </span>
        </p>

        <p>
          El código fuente del proyecto se encuentra en el siguiente
          repositorio:{' '}
          <Link href="https://github.com/iguerra94/switch-component-react">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 underline"
            >
              Link al repo
            </a>
          </Link>
        </p>
      </section>

      <section id="setup-proyecto" className="mb-12 space-y-4">
        <p className="text-xl font-bold selection:bg-yellow-300">
          Setup del proyecto
        </p>
      </section>

      <section id="construyendo-componente" className="mb-12 space-y-4">
        <p className="text-xl font-bold selection:bg-yellow-300">
          Construcción del componente (sin refactorizar)
        </p>
      </section>

      <section id="refactorizando-componente" className="mb-12 space-y-4">
        <p className="text-xl font-bold selection:bg-yellow-300">
          Refactorizar el componente para poder reutilizarlo
        </p>
      </section>
    </>
  )
}

export default Article
