import Head from 'next/head'
import HomeStart from './components/Home/HomeStart'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ravendise</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStart></HomeStart>
    </div>
  )
}
