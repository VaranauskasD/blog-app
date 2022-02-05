import * as React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import type { NextPage } from 'next'

import { Header } from '../components'

const ContentContainer = styled.div``

const HeaderSearch = styled.form``

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContentContainer>Content</ContentContainer>
    </React.Fragment>
  )
}

export default Home
