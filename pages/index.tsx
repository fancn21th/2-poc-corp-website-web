import Head from "next/head";
import delve from "dlv";
import Appbar from "components/shared/Appbar";
import Hero from "components/cms/layout/Hero";
import FeaturedProductPreviews from "components/cms/layout/FeaturedProductPreviews";
import Products from "components/pages/home/Products";
import { getStrapiURL, getStrapiMedia } from "utils";

export default function Home({
  logoImgUrl,
  heroImgUrl,
  banner,
  debugInfo,
  hierarchy,
  seo,
}) {
  return (
    <>
      <Head>
        <title>{seo.seoTitle}</title>
        <meta
          name="description"
          key="description"
          content={seo.seoDescription}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar url={logoImgUrl} />
      <Hero
        url={heroImgUrl}
        alt={"Hero Image"}
        bannerTitle={banner.title}
        bannerLink={banner.link}
      />
      {/* debug */}
      {/* <pre>{JSON.stringify(debugInfo, null, 2)}</pre> */}
      <Products models={hierarchy} />
      <FeaturedProductPreviews />
    </>
  );
}

// This function gets called at build time
export async function getStaticProps(context) {
  // Call an external API endpoint to get homepage

  const populateHomePageParam = `populate[hero][populate]=*&populate[previews][populate]=*,product.*,product.photo&populate[seo][populate]=*&populate=logo`;
  const populateModelsParam = `populate[vehicles][populate]=*&populate=photo`;

  const resHomePage = await fetch(
    getStrapiURL(`/home-paeg?${populateHomePageParam}`)
  );
  const homePage = await resHomePage.json();
  const resModels = await fetch(getStrapiURL(`/models?${populateModelsParam}`));
  const models = await resModels.json();

  // SEO
  const seo = delve(homePage, "data.attributes.seo");

  // Hero
  const hero = delve(homePage, "data.attributes.hero");
  const heroImgUrl = getStrapiMedia(delve(hero, "photo.data.attributes.url"));
  const banner = delve(hero, "banner");
  const logo = delve(homePage, "data.attributes.logo");
  const logoImgUrl = getStrapiMedia(delve(logo, "data.attributes.url"));

  // Models
  const vehicleCollection = delve(models, "data")
    .map((model) => delve(model, "attributes.vehicles.data"))
    .flat()
    .map((vehicle) => ({
      name: delve(vehicle, "attributes.name"),
      photoUrl: getStrapiMedia(
        delve(vehicle, "attributes.photo.data.attributes.url")
      ),
      model: delve(vehicle, "attributes.model.data.attributes.name"),
    }));

  const hierarchy = vehicleCollection.reduce((pre, cur) => {
    if (!pre[cur.model]) {
      pre[cur.model] = [];
    }
    pre[cur.model].push(cur);
    return pre;
  }, {});

  // BodyStyles

  // Previews
  // const previews = delve(homePage, "data.attributes.previews");

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { logoImgUrl, heroImgUrl, debugInfo: seo, banner, hierarchy, seo },
  };
}
