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

const BlogForm = styled.form`
  display: flex;
  flex: 0.5;
  border-radius: 8px;
  padding: 0 16px 16px 16px;
  flex-direction: column;
  background: #fff;
  font-size: 12px;
`

const StyledInput = styled.input`
  height: 24px;
  width: 100%;
  margin-bottom: 8px;
`

const StyledTextArea = styled.textarea`
  resize: vertical;
  margin-bottom: 8px;
`

const StyledLabel = styled.label`
  margin-bottom: 4px;
`

const StyledButton = styled.button`
  display: flex;
  justify-content: flex-end;
  background: #fff;
  border: none;
  padding: 0;
  outline: 1.5px solid transparent;

  :focus,
  :hover {
    border: none;
    outline: none;
    cursor: pointer;
  }

  :focus-within > span {
    background: white;
    color: black;
    outline: 1.5px solid #000;
    outline-offset: -1.5px;
  }

  :hover > span {
    background: white;
    color: black;
    transition: all 0.15s ease;
    outline: 1.5px solid #000;
    outline-offset: -1.5px;
  }

  > span {
    margin: 0px;
    padding: 4px;
    color: white;
    background: #000;
    border-radius: 4px;
  }
`

const Create: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContentContainer>
        <BlogForm method="POST">
          <h1>Create Blog</h1>
          <StyledLabel htmlFor="blog-title">Title: </StyledLabel>
          <StyledInput id="blog-title" />
          <StyledLabel htmlFor="blog-body">Content: </StyledLabel>
          <StyledTextArea id="blog-body" />
          <StyledButton type="submit">
            <span>Create Blog</span>
          </StyledButton>
        </BlogForm>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Create
