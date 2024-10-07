'use client' // Error components must be Client Components

import Link from 'next/link'
export default function Error({ error }: {
  error: Error & { digest?: string }
}) {

  return (
    <section className='errorSection'>
      <h4>Something went wrong: {error.message}</h4>
      <Link href='/' style={{ textDecoration: 'underline' }}>Go to home</Link>
    </section>
  )
}
