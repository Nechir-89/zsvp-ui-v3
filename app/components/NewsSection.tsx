import React from 'react'
import styles from './news.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { FormatNewsPublishedDate } from '@/utils/helpers/FormatDate';
type Props = {
  promise: Promise<AllNews>
}

export default async function NewsSection({ promise }: Props) {
  const news = await promise

  return (
    <div className={`container ${styles.contentWraper}`}>
      <h3 className={styles.title}>Latest News</h3>
      <div className={styles.cardsWraper}>
        {
          news?.data.map((n, index: number) => <article
            key={n.id}
            dir={n.attributes.lang === 'en' ? 'ltr' : 'rtl'}
            className={`${styles[`card${index}`]} ${styles.card}`}
          >
            <div className={styles.imageWraper}>
              <Image
                src={`${process.env.baseUrl}${n.attributes.featuredImage.data.attributes.url}`}
                alt={`${n.attributes.featuredImage.data.attributes.alternativeText}`}
                fill={true}
                objectFit='cover'
              />
            </div>
            <div className={styles.textWraper}>
              <Link href={`/news/${n.id}`}>
                <h4 style={{
                  borderLeft: n.attributes.lang === 'en' ? '5px solid var(--light-orange)' : '',
                  borderRight: n.attributes.lang !== 'en' ? '5px solid var(--light-orange)' : '',
                  paddingLeft: n.attributes.lang === 'en' ? '10px' : '0px',
                  paddingRight: n.attributes.lang !== 'en' ? '10px' : '0px',
                }} className={styles.newsTitle}>{n.attributes.title}</h4>
                <div
                  className={styles.publisheDate}
                  style={{
                    paddingLeft: n.attributes.lang === 'en' ? '14px' : '0px',
                    paddingRight: n.attributes.lang !== 'en' ? '14px' : '0px',
                  }}
                >
                  {FormatNewsPublishedDate(n.attributes.customPublishedDate || n.attributes.publishedAt)}
                </div>
                <div className={styles.newsExcerpt}> {n.attributes.newsExcerpt}</div>
              </Link>
              <div className={styles.footerBar}>
                <span className={styles.shareBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
                    <path d="M66.558 52.2832C70.5709 52.2832 73.9533 53.6878 76.705 56.4969C79.4568 59.3059 80.8327 62.717 80.8327 66.7299C80.8327 70.6282 79.4568 73.9819 76.705 76.791C73.9533 79.6001 70.5709 81.0046 66.558 81.0046C62.545 81.0046 59.1626 79.6001 56.4109 76.791C53.6591 73.9819 52.2832 70.6282 52.2832 66.7299C52.2832 66.2713 52.3406 65.9847 52.4552 65.87L23.3899 51.2513C20.7528 53.5445 17.7144 54.691 14.2747 54.691C10.2617 54.691 6.87937 53.3152 4.12762 50.5634C1.37587 47.8117 0 44.4293 0 40.4163C0 36.4034 1.37587 33.021 4.12762 30.2692C6.87937 27.5175 10.2617 26.1416 14.2747 26.1416C15.9945 26.1416 17.6284 26.4569 19.1763 27.0875C20.7241 27.7181 22.1287 28.5494 23.3899 29.5813L52.4552 15.1346C52.3406 14.9053 52.2832 14.6187 52.2832 14.2747C52.2832 10.2617 53.6591 6.87937 56.4109 4.12762C59.1626 1.37587 62.545 0 66.558 0C70.5709 0 73.9533 1.37587 76.705 4.12762C79.4568 6.87937 80.8327 10.2617 80.8327 14.2747C80.8327 18.2877 79.4568 21.67 76.705 24.4218C73.9533 27.1735 70.5709 28.5494 66.558 28.5494C63.1183 28.5494 60.0799 27.4028 57.4428 25.1097L28.3774 39.7284C28.3774 39.843 28.4061 39.9577 28.4634 40.0724C28.5207 40.187 28.5494 40.3017 28.5494 40.4163C28.5494 40.6456 28.5207 40.789 28.4634 40.8463C28.4061 40.9036 28.3774 41.0469 28.3774 41.2762L57.4428 55.7229C60.0799 53.4298 63.1183 52.2832 66.558 52.2832Z" fill="#606060" />
                  </svg>
                </span>
              </div>
            </div>
          </article>)
        }
      </div>

      <div className={styles.moreNewsBtn}>
        <Link
          href={`/news`}
          className={`btn-link outlined-large-blue-btn-link`}
        >More News</Link>
      </div>
    </div >
  )
}
