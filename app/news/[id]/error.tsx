'use client' // Error components must be Client Components

import Link from 'next/link'

export default function Error({ error }: {
  error: Error & { digest?: string }
}) {

  return (
    <section className='errorSection'>
      <h4>{error.message}</h4>
      <Link
        href='/news'
        style={{ textDecoration: 'underline' }}
      >Go to news</Link>
    </section>
  )

}
