// /pages/id/[id].js

export async function getServerSideProps(context) {
  const { query } = context;
  const { title = "Default Title", desc = "Default Description", img = "", url = "" } = query;

  return {
    props: {
      title: decodeURIComponent(title),
      desc: decodeURIComponent(desc),
      img: decodeURIComponent(img),
      url: decodeURIComponent(url),
    },
  };
}

export default function OGPage({ title, desc, img, url }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={img} />
        {url && <meta property="og:url" content={url} />}
        <meta property="og:type" content="website" />
      </Head>
      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1>{title}</h1>
        <p>{desc}</p>
        {img && <img src={img} alt={title} style={{ maxWidth: "100%", height: "auto" }} />}
        {url && (
          <p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </p>
        )}
      </main>
    </>
  );
}

import Head from "next/head";
