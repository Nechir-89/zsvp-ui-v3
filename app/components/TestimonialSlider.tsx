'use client'
import 'keen-slider/keen-slider.min.css'
// import from 'keen-slider/react.es' for to get an E
import styles from './slide.module.css'
import Image from 'next/image'

type Props = {
  data: Testimonial[]
}

export default function TestimonialSlider({ data }: Props) {
  // const [currentSlide, setCurrentSlide] = useState(0)
  // const [loaded, setLoaded] = useState(false)

  // const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
  //   slides: {
  //     origin: 'center',
  //     perView: 1,
  //     spacing: 64,
  //   },
  //   slideChanged(slider) {
  //     setCurrentSlide(slider.track.details.rel)
  //   },
  //   created() {
  //     setLoaded(true)
  //   },
  // })
  return (
    <div 
    // ref={sliderRef} 
    className={`keen-slider ${styles.card}`}>
      {
        data.map((item: Testimonial) => <article
          style={{ maxWidth: "400px" }}
          key={item.id}
          className={`keen-slider__slide number-slide${item.id} ${styles.slide}`}>
          <div className={`${styles.slideContentWraper}`}>
            <div
              className={`${styles.body}`}
              dir={item.attributes.lang === 'en' ? 'ltr' : 'rtl'}>
              <Image
                src={'/images/quotesSmall.svg'}
                alt={'quotes'}
                width={18}
                height={18}
                className={styles.startQuotes}
                style={{ rotate: item.attributes.lang === 'en' ? '0deg' : '180deg' }}
              />
              <p className={styles.testimonial}>
                {item.attributes.testimonial}
              </p>
              <Image
                src={'/images/quotesSmall.svg'}
                alt={'quotes'}
                width={18}
                height={18}
                className={styles.endQuotes}
                style={{ rotate: item.attributes.lang === 'en' ? '180deg' : '0deg' }}
              />
            </div>
            <div
              className={`${styles.header}`}
              dir={item.attributes.lang === 'en' ? 'ltr' : 'rtl'}>
              <div className={styles.avatarWraper}>
                <Image
                  src={`${process.env.baseUrl}${item.attributes.image.data.attributes.url}`}
                  alt={item.attributes.image.data.attributes.alternativeText}
                  fill={true}
                  // objectFit='cover'
                  className={styles.avatar}
                />
              </div>
              <div className={styles.autherDetails}>
                <h5 className={`${styles.autherName}`}>{item.attributes.author}</h5>
                <div className={`${styles.autherCompany}`}>{item.attributes.positionAndCompany}</div>
              </div>
            </div>
          </div>
        </article>
        )
      }
      <div className="keen-slider__slide"></div>
    </div>
  )
}
