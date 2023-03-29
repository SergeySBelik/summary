import styles from './ContentBlock.module.scss'

const ContentBlock = ({ IconComponent, title, text }) => {
  return (
    <>
      <div className={styles.headingBlock}>
        <div className={styles.body}>
          <IconComponent className={styles.icon} size="30px" />
          <h2>{title}</h2>
        </div>
        <div className={styles.tr}></div>
      </div>
      {text}
    </>
  )
}
export default ContentBlock
