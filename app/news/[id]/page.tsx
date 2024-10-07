import { getNews, getOneNews } from '@/utils/services/news'
import React, { Suspense } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { FormatNewsPublishedDate } from '@/utils/helpers/FormatDate'
import PhotoGallery from './components/PhotoGallery'
import LoadingComponent from '@/app/components/LoadingComponent'
import Documents from './components/Documents'
import { openAlerts } from '@/utils/services/alerts'

type Props = {
  params: {
    id: string
  }
}

export default async function NewsPage({ params: { id } }: Props) {

  const promise: Promise<{ data: News }> = getOneNews(id)
  const news = await promise

  const alertPromise: Promise<Alerts> = openAlerts();
  const alerts = await alertPromise
  // console.log(news)
  // console.log(news.data.attributes.photos)
  // console.log(news.data.attributes.documents)

  return (
    <>
      <div className={styles.header} style={{ paddingTop: alerts.data.length == 0 ? '150px' : '210px' }}>
        <div className={styles.navAndShare}>
          <Link href={`/news`}>Back to News</Link>
          <div>Share</div>
        </div>
        <div className={styles.tag}>
          <span>NEWS</span>
        </div>
        <h4>
          {news.data.attributes.title}
        </h4>
        <div className={styles.publishedDate}>Published on &nbsp;
          {
            FormatNewsPublishedDate(news.data.attributes.customPublishedDate || news.data.attributes.publishedAt)
          }
        </div>
      </div>
      <div
        className={styles.body}
        dir={news.data.attributes.lang === 'en' ? 'ltr' : 'rtl'}
        dangerouslySetInnerHTML={{ __html: news.data.attributes.news }}
      ></div>
      {
        news?.data?.attributes?.photos?.data &&
        <div className={styles.gallery}>
          <Suspense fallback={<LoadingComponent />}>
            <h4 style={{ marginBottom: 24 }}>Photos</h4>
            <PhotoGallery photos={news?.data?.attributes?.photos?.data} />
          </Suspense>
        </div>
      }
      {
        news?.data?.attributes?.documents?.length !== 0 &&
        <div className={styles.documents}>
          <Suspense fallback={<LoadingComponent />}>
            <h4 style={{ marginBottom: 12 }}>Documents</h4>
            <Documents documents={news.data.attributes.documents} />
          </Suspense>
        </div>
      }
    </>
  )
}


export async function generateStaticParams() {
  const newsPromise: Promise<AllNews> = getNews();
  const allNews = await newsPromise;

  return allNews.data.map(news => ({
    id: news.id.toString()
  }))
}
