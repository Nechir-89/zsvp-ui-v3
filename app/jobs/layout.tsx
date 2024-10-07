import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZSVP Jobs',
  description: `ZSVP as a local NGO, Non-profit established in 1991, 
  is interested on community development to promote 
  the ability of vulnerable groups of rural communities 
  and help them for fair sustainable life.`,
}

type Props = {
  children: React.ReactNode
}

export default function JobsLayout({ children }: Props) {
  return (
    <main>
      {children}
    </main>
  )
}
