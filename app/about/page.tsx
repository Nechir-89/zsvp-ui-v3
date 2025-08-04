import styles from "./styles.module.css";
import { getAboutItems } from "@/utils/services/about";
import removeSpace from "@/utils/helpers/removeSpace";
import AboutNavigation from "./AboutNavigation";

export default async function AboutPage() {
  const aboutReq: Promise<AboutItems> = getAboutItems();
  const aboutItems = await aboutReq;

  return (
    <div className={styles.aboutPageWraper}>
      <AboutNavigation aboutItems={aboutItems} topPadding={"150px"} />

      {aboutItems?.data?.map((aboutItem: AboutItem) => (
        <div
          key={aboutItem.id}
          className={styles.aboutItem}
          id={`${removeSpace(aboutItem.attributes.title)}`}
        >
          <h4>{aboutItem.attributes.title}</h4>
          <div
            dangerouslySetInnerHTML={{ __html: aboutItem.attributes.body }}
          ></div>
        </div>
      ))}
    </div>
  );
}
