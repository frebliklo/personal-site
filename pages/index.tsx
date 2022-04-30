import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const portfolioLink =
  'https://www.figma.com/proto/RoZ2yaXRPeWHk2a4nB9VdF/frebliklo?page-id=140%3A8171&node-id=165%3A5964&viewport=241%2C48%2C0.05&scaling=contain&starting-point-node-id=165%3A5964'

const Text: React.FC = ({ children }) => (
  <p className="text-xl leading-relaxed mt-6">{children}</p>
)

const PortfolioLink: React.FC = ({ children }) => (
  <a
    href={portfolioLink}
    target="_blank"
    className="underline font-semibold"
    rel="noreferrer"
  >
    {children}
  </a>
)

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frederik Blichert Klovborg</title>
        <meta
          name="description"
          content="Danish product designer who's creating a new website!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="prefetch" href={portfolioLink}></link>
      </Head>

      <main>
        <div className="container mx-auto px-4 h-screen flex flex-col justify-center max-w-4xl">
          <h1 className="text-3xl font-semibold">Hi, I&apos;m Frederik!</h1>
          <Text>
            I’m a product designer with an eye for detail and a mind for
            systems. I use research, prototyping and systems thinking to solve
            complex tasks and create delightful products and services. I value
            collaboration, simplicity and the tiny details.
          </Text>
          <Text>
            At the moment I’m redoing my website so there might not be much to
            see here. If you’re looking for examples of my work then feel free
            to take a look at <PortfolioLink>this presentation</PortfolioLink>.
          </Text>
        </div>
      </main>
    </div>
  )
}

export default Home
