import Head from "next/head";
import delve from "dlv";
import Hero from "components/cms/layout/Hero";
import { getStrapiURL } from "utils";

export default function Home({ heroImgUrl, hero, previews }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero url={heroImgUrl} />
      <pre>{JSON.stringify(hero, null, 2)}</pre>
      <pre>{JSON.stringify(previews, null, 2)}</pre>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps(context) {
  // Call an external API endpoint to get homepage
  const resHomePage = await fetch(
    getStrapiURL(
      `/home-paeg?populate[hero][populate]=*&populate[previews][populate]=*,product.*,product.photo`
    )
  );
  const homePage = await resHomePage.json();

  const hero = delve(homePage, "data.attributes.hero");
  const previews = delve(homePage, "data.attributes.previews");
  const heroImgUrl = delve(hero, "photo.data.attributes.url");

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      hero,
      previews,
      heroImgUrl,
    },
  };
}
