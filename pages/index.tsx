import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Head>
        <title>Ravinder Singh | Android Engineer</title>
        <meta name="description" content="Portfolio of Ravinder Singh - Android Engineer" />
      </Head>
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Ravinder Singh</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <section id="hero" className="text-center py-20">
          <h2 className="text-4xl font-extrabold text-blue-700">Hi, I'm Ravinder 👋</h2>
          <p className="mt-4 text-lg text-gray-600">Android Engineer | Kotlin | Jetpack Compose | Firebase | KMM</p>
          <a
            href="mailto:ravinder1908singh@gmail.com"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            Contact Me
          </a>
        </section>

        <section id="about" className="py-10">
          <h3 className="text-2xl font-semibold text-blue-600">About Me</h3>
          <p className="mt-4 text-gray-700">
            Android Engineer with over 3 years of experience building high-performance, scalable, and user-centric apps.
            Skilled in Kotlin, Jetpack Compose, MVVM, Firebase, and modern Android development practices.
          </p>
        </section>

        <section id="skills" className="py-10">
          <h3 className="text-2xl font-semibold text-blue-600">Skills</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
            <ul>
              <li>Android SDK, Jetpack Compose, Material Design</li>
              <li>Kotlin, Java, C++</li>
              <li>MVVM, MVI, Clean Architecture</li>
              <li>Kotlin Coroutines, Flow</li>
            </ul>
            <ul>
              <li>JUnit, Espresso, Mockito</li>
              <li>Hilt, Dagger, Koin</li>
              <li>Room, WorkManager, Firebase</li>
              <li>Git, GitHub Actions, Jenkins</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="py-10">
          <h3 className="text-2xl font-semibold text-blue-600">Projects</h3>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li><a href="https://play.google.com/store/apps/details?id=com.meau.mobnew" className="text-blue-600 hover:underline">Mitsubishi Electric Automation</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.Lumakin" className="text-blue-600 hover:underline">Lumakin</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.myoutdoor.agent" className="text-blue-600 hover:underline">My Outdoor Agent</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.game.sleepscience" className="text-blue-600 hover:underline">Sleep Science</a></li>
          </ul>
        </section>

        <section id="experience" className="py-10">
          <h3 className="text-2xl font-semibold text-blue-600">Experience</h3>
          <div className="mt-4 text-gray-700">
            <p><strong>CS Soft Solutions</strong> – Software Engineer (Dec 2021 – Present)</p>
            <ul className="list-disc list-inside">
              <li>Migrated UI to Jetpack Compose and improved responsiveness</li>
              <li>Built Compose Multiplatform UI components</li>
              <li>Enhanced crash handling using Coroutines and Flow</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="py-10">
          <h3 className="text-2xl font-semibold text-blue-600">Contact</h3>
          <p className="mt-2 text-gray-700">📧 ravinder1908singh@gmail.com</p>
          <p className="text-gray-700">📱 +91 8146818538</p>
          <p className="text-blue-600"><a href="https://www.linkedin.com/in/ravinder-singh-822966167">LinkedIn</a> | <a href="https://github.com/RavinderSS">GitHub</a></p>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Ravinder Singh. All rights reserved.
      </footer>
    </div>
  );
}
