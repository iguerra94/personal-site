import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700&display=swap"
            rel="stylesheet"
          />
          <title>Blog - Iván Guerra</title>
        </Head>
        <body className="mx-auto font-montserrat xl:max-w-5xl">
          <header className="flex items-center justify-between py-5 font-semibold">
            <h1 className="selection:bg-yellow-300">iguerra.dev</h1>

            <nav className="flex items-center space-x-3">
              <Link href="https://github.com/iguerra94">
                <a target="_blank" rel="noopener noreferrer">
                  <AiFillGithub
                    title="Github"
                    className="cursor-pointer"
                    size={28}
                  />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/ivanguerra09/">
                <a target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin
                    title="LinkedIn"
                    className="cursor-pointer"
                    size={28}
                  />
                </a>
              </Link>
            </nav>
          </header>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
