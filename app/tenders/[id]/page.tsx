import { getTender } from "@/utils/services/tenders";
import styles from "./styles.module.css";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function TenderPage({ params: { id } }: Props) {
  // eslint-disable-next-line
  const tender = await getTender(id);

  if (tender && tender.data && tender.data.attributes)
    return (
      <div
        className={styles.tenderPage}
        dir={
          tender.data.attributes.textLang &&
          tender.data.attributes.textLang === "en"
            ? "ltr"
            : "rtl"
        }
        style={{ paddingTop: "140px" }}
      >
        <div className={styles.header}>
          <nav className={styles.nav}>
            <span>
              <Link href={`/tenders`}>Back to tenders</Link>
            </span>
            <div>Tell a Friend</div>
          </nav>
          <h4>
            {tender.data.attributes.title && tender.data.attributes.title
              ? tender.data.attributes.title
              : "No title"}
          </h4>
          {tender.data.attributes.openDate &&
            tender.data.attributes.closeDate && (
              <div className={styles.details}>
                <p>
                  Open Date: <span>{tender.data.attributes.openDate}</span>
                </p>
                <p>
                  Close Date: <span>{tender.data.attributes.closeDate}</span>
                </p>
              </div>
            )}
        </div>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{
            __html: tender.data.attributes.body
              ? tender.data.attributes.body
              : "",
          }}
        ></div>

        <div className={styles.howToApply}>
          <h5>How To Apply</h5>
          <div
            className={styles.howToApplyBody}
            dangerouslySetInnerHTML={{
              __html: tender.data.attributes.howToApply
                ? tender.data.attributes.howToApply
                : "",
            }}
          ></div>
        </div>

        {tender.data.attributes.links &&
          tender.data.attributes.links.length !== 0 && (
            <div className={styles.links}>
              <h5>Links</h5>
              <ol>
                {tender.data.attributes?.links?.map((link: Link) => (
                  <li key={link.id}>
                    <Link
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )}
      </div>
    );

  if (tender && tender.error)
    return (
      <section className={"noDataSection"} style={{ padding: "24px" }}>
        <h5>
          We are sorry, an error occurred while searching for the tender, please
          try again later!
        </h5>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Go to Home
        </Link>
      </section>
    );

  return (
    <section className={"noDataSection"} style={{ padding: "24px" }}>
      <h5>
        We are sorry, an unknown error occurred while searching for the tender!
      </h5>
      <Link href="/" style={{ textDecoration: "underline" }}>
        Go to Home
      </Link>
    </section>
  );
}

// export async function generateStaticParams() {
//   const jobsPromise: Promise<Jobs> = openJobs();
//   const jobs = await jobsPromise;

//   if (jobs?.data?.length !== 0)
//     return jobs.data.map(job => ({
//       id: job.id.toString()
//     }))

//   else
//      return ({})
// }
