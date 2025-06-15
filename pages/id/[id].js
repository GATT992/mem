import Head from 'next/head';

export async function getServerSideProps({ query }) {
  const { title = '', desc = '', img = '', url = '' } = query;

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
      <h1>{title}</h1>
      <p>{desc}</p>
      <img src={img} alt={title} style={{ maxWidth: '100%' }} />
      {url && (
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        </p>
      )}
    </>
  );
}
