import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/carousel";

import Hero from "../components/hero";
import Navbar from "../components/nav";
import { getAnimeInfo } from "../helpers/api-util";

export default function Home({ airing }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel airing={airing} />
      as asd asd
    </>
  );
}

export async function getStaticProps() {
  const document = await getAnimeInfo("status=airing&order_by=score&sort=desc");

  return {
    props: {
      airing: document,
    },
  };
}
