'use client' // Error components must be Client Components

import Link from 'next/link'

export default function Error({ error }: {
  error: Error & { digest?: string }
}) {

  return (
    <section className='errorSection'>
      <h4>{error.message}</h4>
      <Link href='/jobs' style={{ textDecoration: 'underline' }}>Go to jobs</Link>
    </section>
  )
  
}
