import styles from '../styles.module.css'
import Link from 'next/link'

type Props = {
  id: number,
  title: string,
  openDate: string,
  closeDate: string,
  location: string,
  positions: number,
  type: string,
  lang: string,
}

export default function JobCard({ id, title, openDate, closeDate, location, positions, type, lang }: Props) {

  return (
    <article className={styles.cardWraper} dir={lang === 'en' ? 'ltr' : 'rtl'}>
      <div className={styles.openDate}>{openDate}</div>
      <Link href={`/jobs/${id}`} className={styles.title}>
        <h5>{title}</h5>
      </Link>
      <div className={styles.details}>
        <p>Close Date: <span>{closeDate}</span></p>
        {location && <p>Location: <span>{location}</span></p>}
        <p>Positions: <span>{positions}</span></p>
        {type && <p>Type: <span>{type}</span></p>}
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.shareBtn}>
          Tell a friend
        </span>
      </div>
    </article>
  )

}