import { Terminal, Code, Server, Mic } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16 py-10">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-5xl font-bold text-white">Hello, I'm Florian.</h1>
        <h2 className="text-2xl text-blue-400">DevOps Engineer & Network Automation Enthusiast</h2>
        <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
          With a solid background in Software Engineering, I bridge the gap between code and infrastructure. 
          I am passionate about automating complex network flows and building robust CI/CD pipelines.
        </p>
      </section>

      {/* About & Hobbies */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
          <h3 className="text-xl font-bold mb-4 flex items-center"><Terminal className="mr-2" /> The Journey</h3>
          <p className="text-slate-400">
            My path started in traditional software engineering, but my curiosity led me to the world of operations and networking.
            Currently, I am deep-diving into <span className="text-white">eBPF</span> and advanced <span className="text-white">Kubernetes networking</span>.
          </p>
        </div>
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
          <h3 className="text-xl font-bold mb-4">Curiosity & Hobbies</h3>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>Exploring new Containerlab topologies</li>
            <li>Contributing to Open Source Network tools</li>
            <li>Hiking and Photography (Offline mode)</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-2xl font-bold mb-6 flex items-center"><Code className="mr-2"/> Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Go (Golang)', 'Python', 'GitLab CI/CD', 'Kubernetes', 'Ansible', 'Containerlab', 'Docker', 'Linux'].map(skill => (
            <div key={skill} className="bg-slate-800 p-3 rounded text-center font-mono text-sm hover:bg-blue-600 transition cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Talks */}
      <section>
        <h3 className="text-2xl font-bold mb-6 flex items-center"><Mic className="mr-2"/> Talks & Events</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-lg">Network Automation at Scale</h4>
            <p className="text-sm text-slate-400">NetAuto Rhein-Main Meetup • 2024</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-bold text-lg">GitLab CI for Network Engineers</h4>
            <p className="text-sm text-slate-400">DevOps Days • 2023</p>
          </div>
        </div>
      </section>
    </div>
  );
}