import styles from './page.module.css'
import HeroSection from './components/HeroSection'
// import TestimonialSection from './components/TestimonialSection'
import NewsSection from './components/NewsSection'
import PartnersSection from './components/PartnersSection'
import ContactUs from './components/ContactUs'
import { getHomePage } from '@/utils/services/homePage'
// import { getTestimonials } from '@/utils/services/testimonials'
import { getSomeNews } from '@/utils/services/news'
import { getPartners } from '@/utils/services/partners'
import { Suspense } from 'react'
import LoadingComponent from './components/LoadingComponent'
import { openAlerts } from '@/utils/services/alerts'

export default async function Home() {
  const homePageRes: Promise<HomePage> = getHomePage();
  const alertPromise: Promise<Alerts> = openAlerts();

  // const testimonials: Promise<Testimonials> = getTestimonials();
  const news: Promise<AllNews> = getSomeNews(4);
  const partners: Promise<Partners> = getPartners()

  const homePage = await homePageRes
  const alerts = await alertPromise
  // console.log(homePageData)
  return (
    <main>
      <section className={`section ${styles.heroSection}`} style={{paddingTop: alerts.data.length == 0? '200px': '232px'}}>
        <HeroSection data={homePage.data} />
      </section>
      {/* <section className={`section ${styles.testimonialSection}`}>
        <Suspense fallback={<LoadingComponent />}>
          <TestimonialSection promise={testimonials} />
        </Suspense>
      </section> */}
      <section className={`section ${styles.newsSection}`}>
        <Suspense fallback={<LoadingComponent />}>
          <NewsSection promise={news} />
        </Suspense>
      </section>
      <section className={`section ${styles.partnerSection}`}>
        <Suspense fallback={<LoadingComponent />}>
          <PartnersSection promise={partners} />
        </Suspense>
      </section>
      <section className={`section ${styles.contactusSection}`}>
        <ContactUs />
      </section>
    </main>
  )
}


