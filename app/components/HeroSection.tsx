'use client'

import { OutlinedLargeYellowBtnLink } from './btnLink/BtnLink';
import Image from 'next/image';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from './hero.module.css'

type Prop = {
  data: HomePageData
};

type ImageData = {
  id: number,
  attributes: {
    url: string
  }
}

export default function HeroSection({ data }: Prop) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2500)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <div className={`container ${styles.contentWraper} `} >
      <div className={`${styles.col1}`}>
        <h1 className={`${styles.mainTitle}`}>
          ZSVP
        </h1>
        <span className={`${styles.year}`}>1991</span>
        <p className={`${styles.description}`}
          dangerouslySetInnerHTML={{ __html: data.attributes.zsvpIntroductionText.toString() }}>
        </p>
        <span className={`${styles.bar}`}></span>
        <div className={styles.btn}>
          <OutlinedLargeYellowBtnLink to='/about' text='Learn More' />
        </div>
      </div>
      <div className={`${styles.image} ${styles.col2}`}>
        <div ref={sliderRef} className="keen-slider">
          {
            data.attributes.Image.data.map((image: ImageData) => (
              <div key={image.id} className={`keen-slider__slide ${styles['image-wraper']}`}>
                <Image
                  src={`${process.env.baseUrl}${image.attributes.url}`}
                  alt='illistration'
                  fill={true}
                  loading='lazy'
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
