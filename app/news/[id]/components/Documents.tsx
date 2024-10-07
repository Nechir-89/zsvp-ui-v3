import Link from 'next/link'
import React from 'react'
import styles from '../styles.module.css'

type Props = {
  documents: NewsDocument[] | [] | undefined
}

export default function Documents({ documents }: Props) {
  return (
    <ol className={styles.documentList}>
      {
        documents?.map((document: NewsDocument) => <li key={document.id}>
          <div className={styles.titleAndDesc}>
            <p className={styles.title}>- {document.doc_title}</p>
            <p className={styles.desc}>{document.doc_desc}</p>
          </div>
          <div className={styles.btns}>
            <span className={styles.downloadBtn}>
              <Link
                href={
                  document.link != null ?
                    document.link
                    : `${process.env.baseUrl}${document?.docs?.data?.attributes?.url}`}
                target='_blank'
                rel='noopener noreferrer'>
                Download
              </Link>
            </span>
            <span className={styles.viewBtn}>
              <Link
                href={
                  document.link != null ?
                    document.link
                    : `${process.env.baseUrl}${document?.docs?.data?.attributes?.url}`}
                target='_blank'
                rel='noopener noreferrer'>
                View
              </Link>
            </span>
          </div>
        </li>)
      }
    </ol>
  )
}