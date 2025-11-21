import SideBar from "./_components/SideBar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
      <SideBar />

      <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto h-screen">
        {/* Hero Section */}
        <section id="home" className="max-w-3xl mx-auto mb-24 pt-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Building digital <span className="text-primary">experiences</span> that matter.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 opacity-80">
            I'm a full-stack developer passionate about creating intuitive, performant, and beautiful web applications.
            Currently exploring the intersection of design and engineering.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-(--radius-theme) theme-shadow hover:opacity-90 transition-all"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border bg-card text-card-foreground font-medium rounded-(--radius-theme) theme-shadow hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12 border-b border-border pb-4">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group border border-border bg-card text-card-foreground rounded-(--radius-theme) overflow-hidden theme-shadow hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="h-48 bg-secondary/50 flex items-center justify-center border-b border-border">
                  <span className="text-4xl opacity-20">Project {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Project Title {item}
                  </h3>
                  <p className="text-sm opacity-70 mb-4">
                    A brief description of the project goes here. It solves a problem and uses cool technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Tailwind"].map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8 border-b border-border pb-4">About Me</h2>
          <div className="prose dark:prose-invert max-w-none opacity-90">
            <p className="mb-4">
              I started coding when I was 15, tinkering with HTML and CSS to customize my MySpace profile.
              Fast forward to today, and I've had the privilege of building software for an advertising agency,
              a start-up, and a huge corporation.
            </p>
            <p>
              My main focus these days is building accessible, inclusive products and digital experiences
              for a variety of clients. I also recently started learning about Web3 and blockchain technology.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 border-b border-border pb-4">Get in Touch</h2>
          <div className="p-8 border border-border bg-card text-card-foreground rounded-(--radius-theme) theme-shadow text-center">
            <h3 className="2xl font-bold mb-4">Let's work together</h3>
            <p className="mb-8 opacity-80">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-(--radius-theme) theme-shadow hover:scale-105 transition-transform"
            >
              Say Hello
            </a>
          </div>
        </section>

        <footer className="max-w-5xl mx-auto pt-12 border-t border-border text-center opacity-50 text-sm">
          <p>&copy; {new Date().getFullYear()} David Welsh, Random.Coder()</p>
        </footer>
      </main>
    </div>
  );
}
