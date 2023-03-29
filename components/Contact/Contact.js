import { TiContacts } from 'react-icons/ti'
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import styles from './Contact.module.scss'
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <h2>
          <TiContacts className={styles.iconTitle} size="30px" />
          CONTACT
        </h2>
      </div>
      <ul>
        <li>
          <a href="tel:+380633372929">
            <BsFillTelephoneFill className={styles.contactIcon} size="14px" />
            +38063-337-2929
          </a>
        </li>
        <li>
          <a className={styles.email} href="email:sergey.s.belik89@gmail.com">
            <MdOutlineMail className={styles.contactIcon} size="20px" />
            sergey.s.belik89@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/belik_serg/" target="_blank">
            <BsInstagram className={styles.contactIcon} size="18px" />
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100008722365402"
            target="_blank"
          >
            <RiFacebookCircleLine className={styles.contactIcon} size="22px" />
            Facebook
          </a>
        </li>
        <li>
          <p>
            <SlLocationPin className={styles.contactIcon} size="18px" />
            Ivano-Frankivsk, Ukraine
          </p>
        </li>
      </ul>
    </div>
  )
}
export default Contact
