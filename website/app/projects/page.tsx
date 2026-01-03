'use client';
import { useState } from 'react';
import { FolderGit2, BookOpen, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Kubernetes GNMI Monitor for Network Devices",
      teaser: "A K8s controller that monitors network devices via GNMI.",
      details: "This private project implements a Kubernetes controller that watches custom resources representing network devices. It establishes GNMI sessions to these devices, collects telemetry data, and exposes it via Prometheus metrics for monitoring purposes.",
      status: "Private",
      link: "#"
    }, 
    {
      id: 2,
      title: "Game for Learning Network Automation",
      teaser: "An interactive game to teach network automation concepts.",
      details: "This public project is a web-based game designed to help users learn network automation. Players complete challenges by writing scripts to automate network tasks, receiving feedback and progressing through levels.",
      status: "Private",
      link: "#",
    },
    /*{
      id: 1,
      title: "Network Config Generator",
      teaser: "A Go-based tool to template router configs.",
      details: "This private project uses Go templates to generate configurations for Cisco and Arista devices. It includes a complete unit test suite and integrates with NetBox as a Source of Truth.",
      status: "Private",
      link: "#"
    },*/
    /*{
      id: 2,
      title: "K8s Controller for NetOps",
      teaser: "Public controller handling CRDs for switching.",
      details: "Available on GitHub. This controller watches for custom Switch resources and provisions VLANs automatically via GNMI.",
      status: "Public",
      link: "https://github.com/floehden/example"
    }*/
  ];

  const conferences = [
    {name: "FOSDEM 2024", url: "https://fosdem.org/2024/", date: "3-4 Feb 2024", location: "Brussels, Belgium"},
    {name: "Autocon 3", url: "https://networkautomation.forum/autocon3", date: "26-30 May 2025", location: "Prague, Czech Republic"},
    {name: "ContainerDays 2025", url: "https://containerdays.io/", date: "10-12 Sep 2025", location: "Hamburg, Germany"},
    {name: "DENOG 17", url: "https://www.denog.de/de/meetings/denog17/", date: "09-11 Nov 2025", location: "Germany"},
  ];

  const resources = [
    { name: "NetAuto Group", url: "https://netauto-group.com/", category: "Community" },
    { name: "NetAuto Bootcamp", url: "https://github.com/NetAuto-RheinMain/NetAuto-Bootcamp", category: "Learning" },
    { name: "Containerlab", url: "https://containerlab.dev/", category: "Tools" },
    { name: "Network Automation Forum (NAF)", url: "https://networkautomation.forum/", category: "Community" },
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
              <h4 className="font-bold text-lg group-hover:text-purple-400 transition">{conf.name}</h4>
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