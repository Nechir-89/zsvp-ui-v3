import type { Metadata } from 'next'
import styles from './styles.module.css'

export const metadata: Metadata = {
  title: 'About ZSVP',
  description: `ZSVP as a local NGO, Non-profit established in 1991, 
  is interested on community development to promote 
  the ability of vulnerable groups of rural communities 
  and help them for fair sustainable life.`,
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.aboutSection}>
      {children}
    </main>
  )
}
