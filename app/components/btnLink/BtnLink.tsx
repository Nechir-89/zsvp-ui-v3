import Link from 'next/link'
import React from 'react'
import styles from './btnLink.module.css'

type Props = {
  text: string,
  to: string
}


export default function BtnLink() {
  return (
    <div>BtnLink</div>
  )
}

export function OutlinedLargeYellowBtnLink({ text, to }: Props) {

  return (
    <Link
      href={to}
      className={`${styles.OutlinedLargeYellowBtnLink} btn-link outlined-large-yellow-btn-link`}>
      {text}
    </Link>
  )
}
