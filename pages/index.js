import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Photo from '../components/Photo/Photo'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import ContentBlock from '../components/ContentBlock/ContentBlock'
import { GiProgression } from 'react-icons/gi'
import { BiAlignLeft } from 'react-icons/bi'
import { MdSchool } from 'react-icons/md'
import { IoLanguage } from 'react-icons/io5'
import { BsBriefcaseFill } from 'react-icons/bs'
import { HiWrenchScrewdriver } from 'react-icons/hi2'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web developer | Belik Sergey</title>
        <meta name="description" content="Summary" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <main className={styles.main}>
        <div className={styles.paper}>
          <div className={styles.paper_left}>
            <div className={styles.paper_left_сonteiner}>
              <div className={styles.title}>
                <Photo />
                <div className={styles.titleConteiner}>
                  <p className={styles.myName}>Belik Sergey</p>
                  <h1>Junior Frontend Developer</h1>
                </div>
              </div>
              <About />
              <Contact />
            </div>
          </div>

          <div className={styles.paper_right}>
            <div className={styles.paper_right_сonteiner}>
              <ContentBlock
                IconComponent={GiProgression}
                title="OBJECTIVE"
                text="Internship as a frontend developer with the possibility of
                employment in the company. I strive to be part of a friendly and
                professional team where I could develop my development skills to
                achieve team results."
              />

              <ContentBlock
                IconComponent={BiAlignLeft}
                title="SUMMARY"
                text="Junior in React development. I have little experience in web
                development. I can make an adaptive layout of the application
                according to the designs. I can implement application logic with
                requests to the server and processing of server responses."
              />
              <ContentBlock
                IconComponent={HiWrenchScrewdriver}
                title="SKILLS"
                text=" "
              />
              <p>
                HTML, CSS, SCSS, Git, JavaScript, React/React Hooks, Redux
                Toolkit, Next JS.
              </p>
              <p>
                <strong>Programs:</strong> VS Code, WebStorm, Figma, Photoshop.
              </p>
              <p>
                <strong>OS:</strong> MacOS, Windows.
              </p>
              <ContentBlock
                IconComponent={MdSchool}
                title="EDUCATION"
                text="I studied programming on my own with the help of internet
                resources (for example - udemy)."
              />
              <ContentBlock
                IconComponent={IoLanguage}
                title="LANGUAGES"
                text=""
              />
              <ul>
                <li>Ukrainian - Native</li>
                <li>Russian - Advanced</li>
                <li>English – A2</li>
              </ul>
              <ContentBlock
                IconComponent={BsBriefcaseFill}
                title="WORK EXAMPLES"
                text=""
              />
              <a
                href="https://pizza-git-dev-sergeysbelik.vercel.app/"
                target="_blank"
              >
                React pizza
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
