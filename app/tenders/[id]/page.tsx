import { getTender } from '@/utils/services/tenders'
import styles from './styles.module.css'
import Link from 'next/link'
import { openAlerts } from '@/utils/services/alerts'

type Props = {
  params: {
    id: string
  }
}

export default async function TenderPage({ params: { id } }: Props) {
  // eslint-disable-next-line
  const tenderPromise: Promise<{ data: Tender, meta: {} }> = getTender(id)
  const tender = await tenderPromise

    
  const alertPromise: Promise<Alerts> = openAlerts();
  const alerts = await alertPromise

  return (
    <div
      className={styles.tenderPage}
      dir={tender.data.attributes.textLang === 'en' ? 'ltr' : 'rtl'}
      style={{ paddingTop: alerts.data.length == 0 ? '140px' : '200px' }}>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <span><Link href={`/tenders`}>Back to tenders</Link></span>
          <div>Tell a Friend</div>
        </nav>
        <h4>
          {tender.data.attributes.title}
        </h4>
        <div className={styles.details}>
          <p>Open Date: <span>{tender.data.attributes.openDate}</span></p>
          <p>Close Date: <span>{tender.data.attributes.closeDate}</span></p>
        </div>
      </div>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: tender.data.attributes.body }}></div>

      <div className={styles.howToApply}>
        <h5>How To Apply</h5>
        <div
          className={styles.howToApplyBody}
          dangerouslySetInnerHTML={{ __html: tender.data.attributes.howToApply }}></div>
      </div>

      {
        tender.data.attributes?.links?.length !== 0 &&
        <div className={styles.links}>
          <h5>Links</h5>
          <ol>
            {
              tender.data.attributes?.links?.map((link: Link) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >{link.title}</Link>
                </li>))
            }
          </ol>
        </div>
      }
    </div >
  )
}


// export async function generateStaticParams() {
//   const jobsPromise: Promise<Jobs> = openJobs();
//   const jobs = await jobsPromise;

//   if (jobs?.data?.length !== 0)
//     return jobs.data.map(job => ({
//       id: job.id.toString()
//     }))

//   else
//      return ({})
// }
