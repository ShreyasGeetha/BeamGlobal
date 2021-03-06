import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroSection from '../components/HeroSection';
import Info from '../components/Info';
import MiddleSection from '../components/MiddleSection';
import Team from '../components/Team';
import Offerings from '../components/Offerings';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beam Global Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <Info />
      <MiddleSection />
      {/* <Offerings /> */}
      <Team />
    </div>
  )
}
