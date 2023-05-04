import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import utilStyles from '../../styles/utils.module.css';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Layout from '../../components/layout'
import Header from '../../components/atoms/PageHeader';
import HeadParams from '../../components/atoms/HeadParams';
import Section from '../../components/molecules/Section';
import Link from 'next/link';

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
      params: {
        slug: filename.replace('.mdx', '')
      }
    }))
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
      slug + '.mdx'), 'utf-8')
    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
    return {
      props: {
        frontMatter,
        slug,
        mdxSource
      }
    }
  }

  const PostPage = ({ frontMatter: { title, description, date }, mdxSource }) => (
      <>
          <HeadParams
              title={title}
              description={description} />
          <Layout type='blog'>
            <span><small>{date}</small></span>
                <Header>
                    <p className={utilStyles.headingLg} style={{ marginRight: '30px' }}>{title}</p>
                </Header>
                <MDXRemote {...mdxSource} components={{ SyntaxHighlighter, Section, Link }} />
          </Layout>
      </>
  )

  export default PostPage