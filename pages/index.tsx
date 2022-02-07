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

const BlogContainer = styled.div`
  display: flex;
  flex: 0.5;
  border-radius: 8px;
  padding: 0 16px 16px 16px;
  flex-direction: column;
  background: #fff;
  font-size: 12px;
`

const HeaderSearch = styled.form``

const blogs = []

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContentContainer>
        <BlogContainer>Test Blog</BlogContainer>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Home
