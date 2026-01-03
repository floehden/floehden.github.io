'use client';
import { useEffect, useState } from 'react';

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We use rss2json to convert Medium's XML feed to JSON compatible with browser fetching
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@florian.loehden')
      .then(res => res.json())
      .then(data => {
        setPosts(data.items);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-8">Latest from Medium</h2>
      
      {loading && <p>Loading articles...</p>}

      <div className="grid gap-6">
        {posts.map((post, idx) => (
          <article key={idx} className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-blue-500 transition">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-slate-200">{post.title}</h3>
              <span className="text-xs text-slate-500 whitespace-nowrap ml-4">
                {new Date(post.pubDate).toLocaleDateString()}
              </span>
            </div>
            {/* Strip HTML tags from description for a clean preview */}
            <p className="text-slate-400 mb-4 line-clamp-2">
              {post.description.replace(/<[^>]+>/g, '')}
            </p>
            <a href={post.link} target="_blank" className="text-blue-400 hover:underline font-medium">
              Read on Medium &rarr;
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}