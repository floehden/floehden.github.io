# Personal Portfolio & Linktree

![Build Status](https://github.com/floehden/floehden.github.io/actions/workflows/deploy.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

A modern, responsive portfolio website designed for a DevOps Engineer and Network Automation enthusiast. This project replaces standard link-in-bio tools with a fully custom, self-hosted solution that showcases projects, blogs, and technical skills.

The site is hosted on **GitHub Pages** via **GitHub Actions** and acts as the central hub for:
* [cronasty.online](https://cronasty.online)
* [cronasty.com](https://cronasty.com)
* [floehden.github.io](https://floehden.github.io)

## 🚀 Tech Stack

Built with modern web technologies focusing on performance, type safety, and ease of automation.

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Blog Integration:** Dynamic Medium feed via RSS-to-JSON
* **CI/CD:** GitHub Actions

## 📂 Project Structure

This repository uses a specific structure to keep the CI/CD configuration separate from the application code.

```text
.
├── .github/workflows   # CI/CD pipelines for GitHub Actions
├── website/            # The actual Next.js source code
│   ├── src/            # Components, pages, and styles
│   ├── public/         # Static assets (images, CNAME)
│   └── package.json    # Dependencies and scripts
├── .gitignore          # Global git ignore rules
└── README.md           # Documentation

```

## 🛠️ Getting Started

To run this project locally on your machine:

1. **Clone the repository**
```bash
git clone [https://github.com/floehden/floehden.github.io.git](https://github.com/floehden/floehden.github.io.git)
cd floehden.github.io

```


2. **Navigate to the website directory**
The Next.js app lives inside the `website` folder.
```bash
cd website

```


3. **Install dependencies**
```bash
npm install

```


4. **Run the development server**
```bash
npm run dev

```


5. **Open in Browser**
Visit [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to see the result.

## ⚙️ Deployment

Deployment is fully automated using **GitHub Actions**.

1. **Trigger:** Any push to the `main` branch.
2. **Build:** The workflow installs dependencies and runs `npm run build` (Static Export).
3. **Artifact:** The build output (`website/out`) is uploaded as an artifact.
4. **Deploy:** GitHub Pages serves the static files.

*Configuration file:* `.github/workflows/deploy.yml`

## ✨ Key Features

* **Projects Page:** Interactive showcase with expandable details for public and private projects.
* **Resources:** Curated lists of Network Automation tools (NetAuto, Containerlab, etc.).
* **Medium Integration:** Automatically fetches and displays the latest articles from [Medium/@florian.loehden](https://medium.com/@florian.loehden).
* **Linktree:** A high-performance, custom alternative to Linktree for social bio links.
* **Legal Compliance:** Includes a German "Impressum" compliant with DDG §5.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

You are free to use this code as a template for your own portfolio; however, please strip out my personal information and images before deploying.

