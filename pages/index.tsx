import * as React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import type { NextPage } from 'next'

import { Header } from '../components'

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`

const BlogsContainer = styled.div`
  display: flex;
  flex: 0.5;
  border-radius: 8px;
  padding: 0 16px 16px 16px;
  flex-direction: column;
  background: #fff;
  font-size: 12px;
`

const BlogContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 96px;
  font-size: 14px;
  padding: 8px;
  margin: 8px 0;
  border: 1.5px solid #777;
  border-radius: 8px;

  > span {
    font-size: 16px;
    text-decoration: underline;
  }
`

const BlogInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderSearch = styled.form``

const blogs = [
  {
    _id: '61fe38d6fbf8f41ed4a90438',
    title: 'Test Blog',
    author: 'Test User',
    body: 'This is a test blog.',
    date: '1644050612750',
  },
  {
    _id: '61fe38d6fbf8f41ed4a90491',
    title: 'Test Blog',
    author: 'Test User',
    body: 'This is a test blog.',
    date: '1644050612750',
  },
  {
    _id: '61fe38d6fbf8f41ed4a90444',
    title: 'Test Blog',
    author: 'Test User',
    body: 'This is a test blog.',
    date: '1644050612750',
  },
]

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContentContainer>
        <BlogsContainer>
          <h1>Blogs</h1>
          {blogs.map((blog) => (
            <Link href={blog._id} passHref={true}>
              <BlogContainer>
                <span>{blog.title}</span>
                <BlogInfo>
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </BlogInfo>
              </BlogContainer>
            </Link>
          ))}
        </BlogsContainer>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Home
