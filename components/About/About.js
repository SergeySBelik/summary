import styles from './About.module.scss'
import { GoPerson } from 'react-icons/go'
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.block_title}>
        <h2 className={styles.title}>
          <GoPerson className={styles.iconTitle} size="30px" />
          ABOUT ME
        </h2>
      </div>
      <p>
        I love life, people and learning new things. I never sit idle. I love an active life, go in for sports, go to the mountains.
      </p>
      <p>
      I am a hardworking, goal-oriented person, focused on results. I enjoy working in a team, I easily find a common language with everyone.
      </p>
    </div>
  )
}
export default About
