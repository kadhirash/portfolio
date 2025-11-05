export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32 animate-fade-in">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Kadhirash Sivakumar
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Software engineer building things with Next.js and trading in my free time
          </p>
        </header>

        {/* Currently Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            currently:
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• job searching</li>
            <li>• building side projects with Next.js</li>
            <li>• based in Cupertino, looking to move to NYC</li>
          </ul>
        </section>

        {/* Previously Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            previously:
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• software engineer @ General Motors (4.5+ years)</li>
            <li>• bachelor's in computer science @ UC Riverside</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            skills:
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div>
              <span className="font-medium text-gray-900 dark:text-gray-100">Languages & Frameworks:</span> Java, Spring Boot, Python, JavaScript, TypeScript, Angular, AngularJS, React Native
            </div>
            <div>
              <span className="font-medium text-gray-900 dark:text-gray-100">Backend & Cloud:</span> REST APIs, Microservices, AWS, Docker, CI/CD Pipelines
            </div>
            <div>
              <span className="font-medium text-gray-900 dark:text-gray-100">Databases & Tools:</span> PostgreSQL, CodeQL, Git, Jenkins, IntelliJ, VS Code, MATLAB
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            interests:
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• day trading</li>
            <li>• weightlifting & running</li>
            <li>• exploring new food places</li>
            <li>• concerts & time with family/friends</li>
          </ul>
        </section>

        {/* Social Links */}
        <section className="border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-wrap items-center gap-4 text-base text-gray-700 dark:text-gray-300">
            <a
              href="https://github.com/kadhirash"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              github
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://www.linkedin.com/in/kadhirash/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              linkedin
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://x.com/kadhirash"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              x
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="mailto:kadhirash@gmail.com"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              email
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
