import Head from "next/head";
import { useRouter } from "next/router";

export default function OGPage() {
  const router = useRouter();
  const { title, desc, img, url } = router.query;

  return (
    <>
      <Head>
        <title>{title || "Default Title"}</title>
        <meta property="og:title" content={title || "Default Title"} />
        <meta property="og:description" content={desc || "Default Description"} />
        <meta property="og:image" content={img || "https://via.placeholder.com/600x400.png?text=OG+Image"} />
        <meta property="og:url" content={url || "https://gattnotif.vercel.app"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
        <h1>{title || "OG Metadata Generator"}</h1>
        <p>{desc || "This is a dynamically generated OG page."}</p>
        {img && <img src={img} alt="OG Image" style={{ maxWidth: "100%", marginTop: "1rem" }} />}
        <br />
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" style={{ marginTop: "1rem", display: "inline-block", color: "blue" }}>
            {url}
          </a>
        )}
      </div>
    </>
  );
}
