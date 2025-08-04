import Link from "next/link";
import styles from "./footer.module.css";
import { getContacts } from "@/utils/services/contacts";
import { getLocation } from "@/utils/services/location";
import Image from "next/image";
import { getSocialMedias } from "@/utils/services/socialMedias";
import { getAboutItems } from "@/utils/services/about";
import removeSpace from "@/utils/helpers/removeSpace";

export default async function Footer1() {
  const resp: Promise<Contacts> = getContacts();
  const locationResp: Promise<ZSVPLocation> = getLocation();
  const socialMedias = await getSocialMedias();
  const aboutReq: Promise<AboutItems> = getAboutItems();

  const aboutItems = await aboutReq;
  const contacts = await resp;
  const location = await locationResp;

  return (
    <div className={`container ${styles.contentWraper}`}>
      <div className={styles.col1}>
        {aboutItems?.data?.map((aboutItem: AboutItem) => (
          <span key={aboutItem.id} className="footer-nav-item">
            <Link href={`/about#${removeSpace(aboutItem.attributes.title)}`}>
              {aboutItem.attributes.title}
            </Link>
          </span>
        ))}

        <span className="footer-nav-item">
          <Link
            href="https://zsvp.org/webmail"
            rel="noopener noreferrer"
            target="_blank"
          >
            Login
          </Link>
        </span>
        <span className="footer-nav-item">
          <Link href="/tenders">Tenders</Link>
        </span>
        <span className="footer-nav-item">
          <Link href="/jobs">Jobs</Link>
        </span>
        <span className="footer-nav-item">
          <Link href="/reports">Reports</Link>
        </span>
      </div>
      <div className={styles.col2}>
        {contacts.data.map((contact) => (
          <div key={contact.id} className={styles.contactWraper}>
            <Image
              src={`${process.env.baseUrl}${contact.attributes.icon.data.attributes.url}`}
              alt={contact.attributes.icon.data.attributes.alternativeText}
              width={24}
              height={24}
            />
            <span className={`footer-nav-item ${styles.footerNavItem}`}>
              {contact.attributes.value}
            </span>
          </div>
        ))}
        <div className={styles["social-icons-and-map-icon"]}>
          <div className={styles["social-icons"]}>
            {socialMedias &&
              socialMedias.data &&
              socialMedias?.data?.map((media) => (
                <Link
                  href={media.attributes.link}
                  target="_blank"
                  key={media.id}
                  rel="noopener noreferrer"
                >
                  {media &&
                    media.attributes &&
                    media.attributes.logo &&
                    media.attributes.logo.data && (
                      <Image
                        src={`${process.env.baseUrl}${media.attributes.logo.data.attributes.url}`}
                        width={24}
                        height={24}
                        alt={`${media.attributes.title}`}
                        // priority={true}
                      />
                    )}
                </Link>
              ))}
          </div>
          <div className={styles["map-icon"]}>
            <Link
              href={location.data.attributes.url}
              target="_blanck"
              rel="noopener noreferrer"
            >
              <Image
                src={`${process.env.baseUrl}${location.data.attributes.icon.data.attributes.url}`}
                alt={
                  location.data.attributes.icon.data.attributes.alternativeText
                }
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
