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

const BlogContainer = styled.a``

const HeaderSearch = styled.form``

const blogs = [
  {
    _id: '61fe38d6fbf8f41ed4a90438',
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
          {blogs.map((blog) => (
            <BlogContainer>
              {blog.title} {blog.author}
            </BlogContainer>
          ))}
        </BlogsContainer>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Home
