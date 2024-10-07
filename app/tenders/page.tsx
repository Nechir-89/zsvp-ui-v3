import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { openTenders } from '@/utils/services/tenders'
import { openAlerts } from '@/utils/services/alerts';

export default async function page() {
  const tendersPromise: Promise<Tenders> = openTenders();
  const tenders = await tendersPromise;

  
  const alertPromise: Promise<Alerts> = openAlerts();
  const alerts = await alertPromise

  if (tenders?.data?.length !== 0)
    return (
      <div className={styles.tendersPage} style={{ paddingTop: alerts.data.length == 0 ? '140px' : '200px' }}>
        <div className={styles.pageHeader}>
          <h3>Tenders</h3>
          <span>Available Tenders <strong>{tenders.meta?.pagination?.total}</strong></span>
        </div>
        <div className={styles.tendersWraper}>
          {
            tenders.data?.map((tender: Tender) => (
              <article
                key={tender.id}
                className={styles.tender}
                dir={tender.attributes.textLang === 'en' ? 'ltr' : 'rtl'}>
                <h5>- <Link href={`/tenders/${tender.id}`}>{tender.attributes.title}</Link></h5>
                <p className={styles.body}>
                  <span>From <strong>{tender.attributes.openDate}</strong></span>
                  <span>To <strong>{tender.attributes.closeDate}</strong></span>
                </p>
              </article>
            ))
          }
        </div>
      </div>
    )

  return (
    <section
      className={'noDataSection'}
      style={{ padding: '24px' }}>
      <h5>We are sorry, No open tenders available for now!</h5>
      <Link href='/' style={{ textDecoration: 'underline' }}>Go to Home</Link>
    </section>
  )
}
