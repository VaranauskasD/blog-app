import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid black;
  background: #fff;
`

const HomeLink = styled.a`
  padding: 4px;
  outline: 1px solid transparent;

  :focus,
  :hover {
    outline: 1.5px solid black;
    outline-offset: -1.5px;
    border-radius: 4px;
  }
`

const CreateLink = styled.a`
  display: flex;
  align-items: center;
  padding: 4px;
  outline: 1.5px solid transparent;
  border-radius: 8px;

  :focus,
  :hover {
    outline: 1.5px solid black;
    outline-offset: -1.5px;
    border-radius: 4px;
  }
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Link href={'/'} passHref={true}>
        <HomeLink>Blog</HomeLink>
      </Link>
      <Link href={'/create'} passHref={true}>
        <CreateLink>
          <span> Create</span>
        </CreateLink>
      </Link>
    </HeaderContainer>
  )
}
