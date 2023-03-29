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
        Люблю жизнь, людей и узнавать что-то новое. Никогда не сижу без дела.
        Люблю активную жизнь, занимаюсь спортом, хожу в горы.
      </p>
      <p>
        Я трудолюбивый, целеустремленный человек, нацеленный на результат. С
        удовольствием работаю в команде, легко нахожу со всеми общий язык.
      </p>
    </div>
  )
}
export default About
