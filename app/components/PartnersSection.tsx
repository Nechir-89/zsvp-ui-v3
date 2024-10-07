import React from 'react'
import styles from './partners.module.css'
import Image from 'next/image'

type Props = {
  promise: Promise<Partners>
}

export default async function PartnersSection({ promise }: Props) {
  const partners = await promise

  return (
    <div className={`container ${styles.contentWraper}`}>
      <h3 className={styles.title}>Our Partners</h3>
      <div className={styles.descWraper}>
        <p className={styles.description}>
          <strong>ZSVP</strong> has a membership with IFOAM , IIRD, Avalon Network for Sustainable
          Rural Development-Holland, 2007, ANND ,
          DNN Network and Civil Society Forum and EIN (Iraqi Election Information Network).
        </p>
      </div>
      <div className={styles.partnersWraper}>
        {
          partners.data.map(partner => <div key={partner.id} className={styles.partnerCard} >
            <Image
              src={`${process.env.baseUrl}${partner.attributes.logo.data.attributes.url}`}
              alt={partner.attributes.logo.data.attributes.alternativeText}
              fill={true}
              objectFit='contain'
              // objectPosition='right'
            />
          </div>)
        }
      </div>
    </div>
  )
}
