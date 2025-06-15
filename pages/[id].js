// Folder structure // /pages/index.js     => Halaman form input // /pages/[id].js      => Halaman dinamis dengan OG tag

// 1️⃣ pages/index.js

import { useState } from 'react'; import { useRouter } from 'next/router';

export default function Home() { const [title, setTitle] = useState(''); const [desc, setDesc] = useState(''); const [img, setImg] = useState(''); const [url, setUrl] = useState(''); const router = useRouter();

function generateLink() { const id = Math.random().toString(36).substring(2, 8); const params = new URLSearchParams({ title, desc, img, url }); router.push(/${id}?${params.toString()}); }

return ( <div style={{ padding: 20 }}> <h2>Generate OG Link</h2> <input type="text" placeholder="OG Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br /> <input type="text" placeholder="OG Description" value={desc} onChange={(e) => setDesc(e.target.value)} /><br /> <input type="text" placeholder="OG Image URL" value={img} onChange={(e) => setImg(e.target.value)} /><br /> <input type="text" placeholder="Target URL" value={url} onChange={(e) => setUrl(e.target.value)} /><br /> <button onClick={generateLink}>Generate</button> </div> ); }

// 2️⃣ pages/[id].js

export async function getServerSideProps({ query }) { const { title = 'Default Title', desc = 'Default Description', img = '', url = 'https://example.com' } = query;

return { props: { title, desc, img, url }, }; }

export default function OGPage({ title, desc, img, url }) { return ( <> <head> <title>{title}</title> <meta property="og:title" content={title} /> <meta property="og:description" content={desc} /> <meta property="og:image" content={img} /> <meta property="og:url" content={url} /> </head> <body> <h1>{title}</h1> <p>{desc}</p> <a href={url} target="_blank">Go to Link</a> </body> </> ); }

