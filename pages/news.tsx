import Head from "next/head";
import delve from "dlv";
import Appbar from "components/shared/Appbar";
import Hero from "components/cms/layout/Hero";
import FeaturedProductPreviews from "components/cms/layout/FeaturedProductPreviews";
import Products from "components/pages/home/Products";
import { getStrapiURL, getStrapiMedia } from "utils";

export default function News({ logoImgUrl }) {
  return (
    <>
      <Head>
        <title>{"seo.seoTitle"}</title>
        <meta
          name="description"
          key="description"
          content={"seo.seoDescription"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar url={logoImgUrl} />
    </>
  );
}

// This function gets called at build time
export async function getStaticProps(context) {
  // Global Model
  // TODO: move to global event instead
  const populateGlobalParam = `populate[logo][populate]=*`;
  const resGlobal = await fetch(getStrapiURL(`/global?${populateGlobalParam}`));
  const global = await resGlobal.json();
  const logoImgUrl = getStrapiMedia(
    delve(global, "data.attributes.logo.data.attributes.url")
  );

  return {
    props: { logoImgUrl },
  };
}
