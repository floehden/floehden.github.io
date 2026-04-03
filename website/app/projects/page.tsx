'use client';
import { useState } from 'react';
import { FolderGit2, BookOpen, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Netventure: Network Automation Game",
      teaser: "An interactive game to teach network automation concepts.",
      details: "This public project is a web-based game designed to help users learn network automation. Players complete challenges by writing scripts to automate network tasks, receiving feedback and progressing through levels.",
      status: "Private",
      branch: "main",
      link: "#",
    },
    {
      id: 2,
      title: "NetAuto Bootcamp",
      teaser: "A comprehensive training program for network automation.",
      details: "The NetAuto Bootcamp is a structured learning path that covers essential topics in network automation, including tools, best practices, and real-world scenarios. It includes hands-on labs and projects to reinforce learning.",
      status: "Public",
      branch: "main",
      link: "https://github.com/NetAuto-RheinMain/NetAuto-Bootcamp",
    },
    {
      id: 3,
      title: "Cloud Native Network Observability Showcase",
      teaser: "A showcase of cloud-native network observability solutions.",
      details: "This project demonstrates various cloud-native approaches to network observability, showcasing tools and techniques for monitoring and analyzing network traffic in modern infrastructures.",
      status: "Public",
      branch: "main",
      link: "https://github.com/floehden/talk-openrheinmain",
    },
    {
      id: 4,
      title: "Kubernetes Network Spine-Leaf Lab",
      teaser: "A lab environment for practicing Kubernetes networking concepts.",
      details: "This project provides a hands-on environment for learning and practicing Kubernetes networking, including spine-leaf architectures and network policies.",
      status: "Public",
      branch: "kind_clusters",
      link: "https://github.com/floehden/srl-telemetry-lab/tree/kind_clusters",
    }
  ];

  const conferences = [
    {name: "FOSDEM 2024", url: "https://fosdem.org/2024/", date: "3-4 Feb 2024", location: "Brussels, Belgium", status: "done"},
    {name: "Autocon 3", url: "https://networkautomation.forum/autocon3", date: "26-30 May 2025", location: "Prague, Czech Republic", status: "done"},
    {name: "ContainerDays 2025", url: "https://containerdays.io/", date: "10-12 Sep 2025", location: "Hamburg, Germany", status: "done"},
    {name: "DENOG 17", url: "https://www.denog.de/de/meetings/denog17/", date: "09-11 Nov 2025", location: "Germany", status: "done"},
    {name: "OpenRheinMain 2026", url: "https://openrheinmain.org/", date: "20 Mar 2026", location: "Darmstadt, Germany", status: "done"},
    {name: "Autocon 5", url: "https://networkautomation.forum/autocon5", date: "10-13 Jun 2026", location: "Munich, Germany", status: "planned"},
    {name: "ContainerDays 2026", url: "https://containerdays.io/", date: "02-04 Sep 2026", location: "Hamburg, Germany", status: "planned"},
  ];

  const resources = [
    { name: "NetAuto Group", url: "https://netauto-group.com/", category: "Community" },
    { name: "NetAuto Bootcamp", url: "https://github.com/NetAuto-RheinMain/NetAuto-Bootcamp", category: "Learning" },
    { name: "Containerlab", url: "https://containerlab.dev/", category: "Tools" },
    { name: "Network Automation Forum (NAF)", url: "https://networkautomation.forum/", category: "Community" },
    { name: "NetOpsChic Blog", url: "https://medium.com/@netopschic", category: "Blog" },
  ];

  return (
    <div className="py-10 space-y-16">
      
      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center"><FolderGit2 className="mr-2 text-blue-400"/> Projects</h2>
        <div className="grid gap-6">
          {projects.map((p) => (
            <div key={p.id} className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
              <div 
                className="p-6 cursor-pointer hover:bg-slate-800 transition flex justify-between items-center"
                onClick={() => setActiveProject(activeProject === p.id ? null : p.id)}
              >
                <div>
                  <h3 className="font-bold text-xl">{p.title} <span className="text-xs ml-2 bg-slate-700 px-2 py-1 rounded text-slate-300">{p.status}</span></h3>
                  <p className="text-slate-400 mt-1">{p.teaser}</p>
                </div>
                <span className="text-blue-400 text-sm">{activeProject === p.id ? "Close" : "View Details"}</span>
              </div>
              
              {activeProject === p.id && (
                <div className="p-6 bg-slate-950 border-t border-slate-800 text-slate-300 animate-in fade-in slide-in-from-top-2">
                  <p>{p.details}</p>
                  {p.status === 'Public' && (
                    <a href={p.link} target="_blank" className="inline-flex items-center mt-4 text-blue-400 hover:underline">
                      View on GitHub <ExternalLink className="w-4 h-4 ml-1"/>
                    </a> 
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Conferences Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center"><BookOpen className="mr-2 text-purple-400"/> Conferences</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {conferences.map((conf, idx) => (
            <a key={idx} href={conf.url} target="_blank" className="block p-4 bg-slate-900 border border-slate-800 hover:border-purple-500 transition rounded-lg group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg group-hover:text-purple-400 transition">{conf.name}</h4>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">{conf.status}</span>
              </div>
              <p className="text-slate-500 text-sm">{conf.date} - {conf.location}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center"><BookOpen className="mr-2 text-green-400"/> Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {resources.map((res, idx) => (
            <a key={idx} href={res.url} target="_blank" className="block p-4 bg-slate-900 border border-slate-800 hover:border-green-500 transition rounded-lg group">
              <span className="text-xs font-mono text-green-400 mb-1 block">{res.category}</span>
              <h4 className="font-bold text-lg group-hover:text-green-400 transition">{res.name}</h4>
              <p className="text-slate-500 text-sm truncate">{res.url}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}