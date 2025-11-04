export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Kadhirash Sivakumar
          </h1>
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
          <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300">
            <a
              href="https://github.com/kadhirash"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/kadhirash/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              linkedin
            </a>
            <a
              href="https://x.com/kadhirash"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              x
            </a>
            <a
              href="mailto:kadhirash@gmail.com"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
