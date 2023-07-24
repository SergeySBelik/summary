import styles from './Photo.module.scss'
import Image from 'next/image'

const Photo = () => {
  return (
    <>
      <div className={styles.photo}>
        <div className={styles.circle}>
          <Image height={250} width={250} src="/avatar.jpg" alt="avatar" />
        </div>
      </div>
    </>
  )
}
export default Photo
