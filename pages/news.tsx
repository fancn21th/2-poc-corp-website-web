import Head from "next/head";
import dynamic from "next/dynamic";
import delve from "dlv";
import Appbar from "components/shared/Appbar";
import { getStrapiURL, getStrapiMedia } from "utils";

const ArticleContent = dynamic(
  () => import("components/pages/news/ArticleContent"),
  { ssr: false }
);

export default function News({ logoImgUrl, content }) {
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
      <ArticleContent content={content} />
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

  // News Model
  const newsParam = `/1`;
  const resNews = await fetch(getStrapiURL(`/articles?${newsParam}`));
  const news = await resNews.json();
  const content = delve(news, "data");

  return {
    props: { logoImgUrl, content: content[0].attributes.ckcontent },
  };
}
