import { stat } from 'fs';
import { Terminal, Code, Server, Mic } from 'lucide-react';

export default function Home() {
  const skills = ['Go (Golang)', 'Python', 'GitLab CI/CD', 'Kubernetes', 'Containerlab', 'Docker', 'Linux'];
  const talks = [
    {organizer:"NetAuto Group", title: "Discussion on IPv6", event_url: "https://www.meetup.com/netauto-rheinmain/events/311887700/", date: "11 Dec 2025", location: "Neu-Isenburg, Germany", git_repository: "https://github.com/NetAuto-RheinMain/event-slides/blob/main/episode4/readme.md", status: "done"},
    {organizer:"NetAuto Group", title: "NetAuto Hackathon: Intermediate Task", event_url: "https://www.meetup.com/netauto-rheinmain/events/311340322/", date: "06 Nov 2025", location: "Neu-Isenburg, Germany", git_repository: "https://github.com/NetAuto-RheinMain/event-slides/blob/main/episode3/readme.md", status: "done"},
    {organizer:"NetAuto Group", title: "What is Network Automation for everyone?", event_url: "https://www.meetup.com/netauto-rheinmain/events/308664470/", date: "04 Sep 2025", location: "Neu-Isenburg, Germany", git_repository: "https://github.com/NetAuto-RheinMain/event-slides/blob/main/episode1/readme.md", status: "done"},
    {organizer:"Frankfurt Rhein-Main Gophers Meetup", title: "Configuring network devices through Kubernetes", event_url: "https://www.meetup.com/gophers-frm/events/308682690/", date: "10 Jul 2025", location: "Frankfurt, Germany", git_repository: "https://github.com/floehden/gofrm59", status: "done"},
  ];
  const interests = [
    {name: "Network Automation", description: "Automating network configurations and management using modern tools and practices.", explanation: "Network automation helps me streamline network management and reduce manual errors.", type: "technical"},
    {name: "DevOps Practices", description: "Implementing CI/CD pipelines and infrastructure as code to streamline development and operations.", explanation: "DevOps practices help me streamline development and operations by automating deployment and improving collaboration.", type: "technical"},
    {name: "Cloud Computing", description: "Exploring cloud platforms and services to build scalable and resilient applications.", explanation: "Cloud computing allows me to build scalable and resilient applications using modern infrastructure.", type: "technical"},
    {name: "Programming", description: "Writing clean, efficient, and maintainable code in various programming languages.", explanation: "Programming is essential for building robust software solutions that meet user needs.", type: "technical"},
    /*{name: "Open Source Contribution", description: "Contributing to and maintaining open source projects that benefit the community.", type: "community"},*/
    {name: "Tech Meetups", description: "Participating in local tech meetups to share knowledge and network with like-minded professionals.", explanation: "Tech meetups help me stay connected with the latest trends and technologies.", type: "community"},
    {name: "Running", description: "Running and biking to stay fit and healthy.", explanation: "Running helps me stay physically fit and mentally strong.", type: "personal"},
    {name: "CrossFit", description: "Engaging in CrossFit workouts to build strength and endurance.", explanation: "CrossFit helps me stay physically fit and mentally strong.", type: "personal"},
    {name: "Church Activities", description: "Being active in church communities and events.", explanation: "The church I'm active in is the New Apostolic Church. We have 10 million active members worldwide.", type: "personal"},
    {name: "Biking", description: "Exploring nature and cities on my bike.", explanation: "I enjoy biking for both recreation and transportation.", type: "personal"},
  ];
  return (
    <div className="space-y-16 py-10">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-5xl font-bold text-white">Hello, I'm Florian.</h1>
        <h2 className="text-2xl text-blue-400">DevOps Engineer & Network Automation Enthusiast</h2>
        <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
          Coming soon: A detailed introduction about myself and my journey into the world of DevOps and Network Automation.
           {/* With a solid background in Software Engineering, I bridge the gap between code and infrastructure. 
          I am passionate about automating complex network flows and building robust CI/CD pipelines.- */}
          
        </p>
      </section>

      {/* About & Hobbies */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
          <h3 className="text-xl font-bold mb-4 flex items-center"><Terminal className="mr-2" /> The Journey</h3>
          <p className="text-slate-400">
            My path started in traditional software engineering, but my curiosity led me to the world of operations and networking.
            More coming soon.
          </p>
        </div>
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
          <h3 className="text-xl font-bold mb-4">Curiosity & Hobbies</h3>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>Exploring Open Source tools</li>
            <li>CrossFit, Running, Biking and Church (Offline mode)</li>
            <li>More details coming soon</li>
          </ul>
        </div>
      </section>

      {/* Interests*/}
      <section>
        <h3 className="text-2xl font-bold mb-6 flex items-center"><Server className="mr-2"/> Interests</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {interests.map(interest => (
            <div key={interest.name} className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-blue-500 transition cursor-default">
              <h4 className="font-bold text-lg mb-2">{interest.name}</h4>
              <p className="text-slate-400 mb-2">{interest.description}</p>
              <div className="opacity-0 hover:opacity-100 transition">
                <p className="text-slate-500 text-sm italic">"{interest.explanation}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Skills */}
      <section>
        <h3 className="text-2xl font-bold mb-6 flex items-center"><Code className="mr-2"/> Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map(skill => (
            <div key={skill} className="bg-slate-800 p-3 rounded text-center font-mono text-sm hover:bg-blue-600 transition cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Talks */}
      <section>
        <h3 className="text-2xl font-bold mb-6 flex items-center"><Mic className="mr-2"/> Talks & Presentations</h3>
        <div className="space-y-4">
          {talks.map((talk, idx) => (
            <a key={idx} href={talk.event_url} target="_blank" className="block p-4 bg-slate-900 border border-slate-800 hover:border-blue-500 transition rounded-lg group">
              <h4 className="font-bold text-lg group-hover:text-blue-400 transition">{talk.title}</h4>
              <p className="text-slate-500 text-sm">{talk.date} - {talk.location} | by {talk.organizer}</p>
              <a href={talk.git_repository} target="_blank" className="text-blue-400 text-sm hover:underline">View Slides/Code</a>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}