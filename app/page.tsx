export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav className="mt-2">
          <a href="#about" className="mr-4 hover:underline">About</a>
          <a href="#projects" className="mr-4 hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <section id="about" className="my-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hi, I'm a web developer passionate about building modern web applications using Next.js and other technologies. I love creating clean, user-friendly interfaces.
          </p>
        </section>

        <section id="projects" className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-medium">Project 1</h3>
              <p className="text-gray-600">A cool project built with Next.js and Tailwind CSS.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-medium">Project 2</h3>
              <p className="text-gray-600">Another awesome project showcasing my skills.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">
            Reach out to me at <a href="mailto:example@email.com" className="text-blue-600 hover:underline">example@email.com</a>.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}