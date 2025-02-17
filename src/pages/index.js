import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from '@/componentes/Header';
import SectionCover from '@/componentes/SectionCover';
import SectionProducts from '@/componentes/SectionProducts';
import SectionAbout from '@/componentes/SectionAbout';
import SectionContact from '@/componentes/SectionContact';


export default function Home() {
  return (
    <>
      <Head>
        <title>Projeto Ótica</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <SectionCover />
        <SectionProducts />
        <SectionAbout />
        <SectionContact />
      </main>

    </>
  );
}
