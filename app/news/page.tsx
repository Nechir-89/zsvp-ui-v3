import React from 'react'
import styles from './styles.module.css'
import { getNews } from '@/utils/services/news'
import NewsCard from './components/NewsCard'
import Link from 'next/link';
import { openAlerts } from '@/utils/services/alerts';

export default async function NewsPage() {

  const newsPromise: Promise<AllNews> = getNews();

  const alertPromise: Promise<Alerts> = openAlerts();
  const alerts = await alertPromise
  const news = await newsPromise

  if (news.data.length !== 0)
    return (
      <div className={styles.newsPage} style={{ paddingTop: alerts.data.length == 0 ? '140px' : '200px' }}>
        <h3>Latest News</h3>
        <div className={styles.cardsWraper}>
          {
            news?.data?.map((newsItem: News) =>
              <NewsCard
                key={newsItem.id}
                id={newsItem.id}
                featuredImageUrl={newsItem.attributes.featuredImage.data.attributes.url}
                featuredImageAlt={newsItem.attributes.featuredImage.data.attributes.alternativeText}
                title={newsItem.attributes.title}
                excerpt={newsItem.attributes.newsExcerpt}
                publishedAt={newsItem.attributes.publishedAt}
                customPublishedDate={newsItem.attributes.customPublishedDate}
                lang={newsItem.attributes.lang}
              />
            )
          }
        </div>
      </div>
    )

  return (
    <section
      className={'noDataSection'}
      style={{ padding: '24px' }}>
      <h5>No published news yet!</h5>
      <Link href='/' style={{ textDecoration: 'underline' }}>Go to Home</Link>
    </section>
  )
}
