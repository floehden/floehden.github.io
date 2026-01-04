import { Github, Linkedin, Twitter, AtSign } from 'lucide-react';

export default function Links() {
  const links = [
    { name: "Portfolio Website", url: "https://floehden.github.io", icon: <AtSign /> },
    { name: "GitHub", url: "https://www.github.com/floehden", icon: <Github /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/florian-loehden/", icon: <Linkedin /> },
    { name: "Twitter / X", url: "https://www.twitter.com/floehden", icon: <Twitter /> },
    { name: "Medium", url: "https://medium.com/@florian.loehden", icon: <AtSign /> },
    { name: "Bluesky", url: "https://bsky.app/profile/floehden.bsky.social", icon: <AtSign /> },
    { name: "Threads", url: "https://www.threads.net/@floehden", icon: <AtSign /> },
    { name: "Instagram", url: "https://www.instagram.com/floehden", icon: <AtSign /> },
    { name: "Strava", url: "https://www.strava.com/athletes/61968225", icon: <AtSign /> },
  ];

  return (
    <div className="max-w-md mx-auto py-10 text-center">
      <img src="https://github.com/floehden.png" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-slate-800"/>
      <h1 className="text-2xl font-bold mb-2">Florian Löhden</h1>
      <p className="text-slate-500 mb-8">DevOps & NetAuto</p>

      <div className="space-y-4">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.url}
            target="_blank"
            className="flex items-center justify-center space-x-3 w-full p-4 bg-slate-800 hover:bg-blue-600 rounded-lg transition font-medium text-white"
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}