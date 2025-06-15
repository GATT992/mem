import Head from 'next/head';

export default function OGPage({ title, desc, imgUrl }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={imgUrl} />
      </Head>
      <h1>{title}</h1>
      <p>{desc}</p>
      <img src={imgUrl} alt="OG Image" />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query, params } = context;
  const title = query.title || 'Default Title';
  const desc = query.desc || 'Default Description';
  const imgUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://gattnotif.vercel.app'}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(desc)}`;

  return {
    props: {
      title,
      desc,
      imgUrl,
    },
  };
}
