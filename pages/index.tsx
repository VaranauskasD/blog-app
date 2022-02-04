import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const links = ['cooking-at-home', 'survival', 'your-favorite-products']

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {links.map((link, id) => (
        <Link key={id} href={`/blogs/${link}`}>
          <a>link</a>
        </Link>
      ))}
    </div>
  )
}

export default Home
