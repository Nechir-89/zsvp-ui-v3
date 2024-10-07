
import styles from './styles.module.css'
import { getAboutItems } from '@/utils/services/about'
import removeSpace from '@/utils/helpers/removeSpace'
import AboutNavigation from './AboutNavigation'
import { openAlerts } from '@/utils/services/alerts'

export default async function AboutPage() {
  const aboutReq: Promise<AboutItems> = getAboutItems()
  const aboutItems = await aboutReq

  const alertPromise: Promise<Alerts> = openAlerts();
  const alerts = await alertPromise

  return (
    <div className={styles.aboutPageWraper} >
      <AboutNavigation aboutItems={aboutItems} topPadding={alerts.data.length == 0 ? '150px' : '210px'} />

      {
        aboutItems?.data?.map((aboutItem: AboutItem) => <div
          key={aboutItem.id}
          className={styles.aboutItem}
          id={`${removeSpace(aboutItem.attributes.title)}`}
        >
          <h4>{aboutItem.attributes.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: aboutItem.attributes.body }}></div>
        </div>)
      }
    </div>
  )
}
