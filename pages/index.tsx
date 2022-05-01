import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Stack } from '../components/Layout'
import { BodyText, InlineLink } from '../components/Typography'

const portfolioLink =
  'https://www.figma.com/proto/RoZ2yaXRPeWHk2a4nB9VdF/frebliklo?page-id=140%3A8171&node-id=165%3A5964&viewport=241%2C48%2C0.05&scaling=contain&starting-point-node-id=165%3A5964'
const linkedInLink = 'https://www.linkedin.com/in/frebliklo/'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frederik Blichert Klovborg</title>
        <meta
          name="description"
          content="Danish product designer who's building a new website!"
        />
        <meta
          name="keywords"
          content="design, product design, ux design, design systems, user experience design, frebliklo, frederik klovborg, frederikklovborg, frederik blichert klovborg, frederik b klovborg, moodagent, connected cars, prototyping, ux ui design, peytz"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="prefetch" href={portfolioLink}></link>
      </Head>

      <Stack as="main" gap="16" className="md:h-screen mt-8 md:mt-0 max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Hi, I&apos;m Frederik!
        </h1>
        <BodyText>
          I’m a product designer with an eye for detail and a mind for systems.
          I use research, prototyping and systems thinking to solve complex
          tasks and create delightful products and services.
        </BodyText>
        <BodyText>
          At the moment I’m redoing my website so there might not be much to see
          here. If you’re looking for examples of my work then feel free to take
          a look at{' '}
          <InlineLink href={portfolioLink}>this presentation</InlineLink>.
        </BodyText>
        <BodyText>
          At the moment I’m redoing my website so there might not be much to see
          here. If you’re looking for examples of my work then feel free to take
          a look at{' '}
          <InlineLink href={portfolioLink}>this presentation</InlineLink>.
        </BodyText>
      </Stack>
    </>
  )
}

export default Home
