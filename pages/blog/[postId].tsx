import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Head from 'next/head'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: {
      postId: filename.replace('.mdx', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({
  params: { postId },
}: {
  params: { postId: string }
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', postId + '.mdx'),
    'utf-8'
  )
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  return {
    props: {
      frontMatter,
      postId,
      mdxSource,
    },
  }
}

const PostPage = ({
  frontMatter: { title },
  mdxSource,
}: {
  frontMatter: { title: string }
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}) => {
  return (
    <>
      <Head>
        <title>Post - {title}</title>
      </Head>
      <div className="mt-4">
        <Link href="/">
          <a className="mt-4 flex items-center space-x-2 ">
            <AiOutlineArrowLeft color="rgb(30, 58, 138)" />
            <span className="border-b border-b-transparent text-sm text-blue-900 transition-all duration-200 hover:border-b hover:border-b-gray-500">
              Volver al Inicio
            </span>
          </a>
        </Link>
        <h1 className="my-8 text-lg font-bold">{title}</h1>
        <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
      </div>
    </>
  )
}

export default PostPage
