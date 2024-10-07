import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import styles from './page.module.css'
import { Suspense } from 'react'
import LoadingComponent from './components/LoadingComponent'

export const metadata: Metadata = {
  title: 'ZSVP Organization',
  description: `ZSVP as a local NGO, Non-profit established in 1991, 
  is interested on community development to promote 
  the ability of vulnerable groups of rural communities 
  and help them for fair sustainable life.`,
}

// revalidate at most every hour (3600 seconds)
// revalidate every 5 minutes (60 x 5 = 300)
export const revalidate = 300 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // - warn You have enabled experimental feature (serverActions) in next.config.js.
  // - warn Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Suspense fallback={<LoadingComponent />}>
          <footer>
            <section className={`section ${styles.footer1}`}>
              <Footer1 />
            </section>
            <section className={`section ${styles.footer2}`}>
              <Footer2 />
            </section>
          </footer>
        </Suspense>
      </body>
    </html>
  )
}
