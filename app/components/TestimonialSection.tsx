import styles from './testimonial.module.css'
import Image from 'next/image'
import TestimonialSlider from './TestimonialSlider'

type Props = {
  promise: Promise<Testimonials>
}

export default async function TestimonialSection({ promise }: Props) {
  const testimonialsRes = await promise;

  return (
    <div className={`${styles.contentWraper} container`}>
      <div className={styles.leftContentsWraper}>
        <Image
          src='/images/quotes.svg'
          alt='quotes'
          width={70}
          height={46}
          className={styles.mainQuotes}
        />
        <h3 className={styles.title}>Testimonials</h3>
        <p className={styles.description}>
          We are so grateful for the positive feedback
          we have received from so many people.
        </p>
      </div>
      <div className={styles.testimonialsWraper}>
        <TestimonialSlider data={testimonialsRes.data} />
      </div>
    </div>
  )
}
