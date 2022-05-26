import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

interface HomePageProps {
  posts: {
    frontMatter: {
      [key: string]: any
    }
    postId: string
  }[]
}

const Home: NextPage<HomePageProps> = ({ posts }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Blog - Iván Guerra</title>
      </Head>
      <main className="mt-4 flex flex-col space-y-6">
        <h2 className="text-2xl font-bold selection:bg-yellow-300">
          Artículos
        </h2>

        <section className="flex flex-col space-y-4">
          {posts.map((post: any, index: number) => (
            <Link href={'/blog/' + post.postId} passHref key={index}>
              <article className="flex h-[200px] cursor-pointer space-y-3 shadow-custom transition-all duration-200 hover:scale-105 hover:bg-gray-100/75">
                <div className="flex flex-1 flex-col p-4">
                  <h5 className="pb-2 text-lg font-semibold">
                    {post.frontMatter.title}
                  </h5>
                  <p className="pb-4">{post.frontMatter.description}</p>
                  <p className="text-xs">{post.frontMatter.date}</p>
                </div>

                <Image
                  src={post.frontMatter.thumbnailUrl}
                  alt="thumbnail"
                  width={300}
                  height={200}
                  objectFit="cover"
                />
              </article>
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      postId: filename.split('.')[0],
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default Home
