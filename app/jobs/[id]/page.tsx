import styles from "./styles.module.css";
import Link from "next/link";
import { getJob } from "@/utils/services/jobs";

type Props = {
  params: {
    id: string;
  };
};

export default async function JobPage({ params: { id } }: Props) {
  // eslint-disable-next-line
  const job = await getJob(id);
  if (job && job.data && job.data.attributes)
    return (
      <div
        className={styles.jobPage}
        dir={job.data.attributes.textLang === "en" ? "ltr" : "rtl"}
        style={{ paddingTop: "140px" }}
      >
        <div className={styles.header}>
          <nav className={styles.nav}>
            <span>
              <Link href={`/jobs`}>Back to Jobs</Link>
            </span>
            <div>Tell a Friend</div>
          </nav>
          <h4>{job.data.attributes.title}</h4>
          <div className={styles.details}>
            {job.data.attributes.openDate && (
              <p>
                Open Date: <span>{job.data.attributes.openDate}</span>
              </p>
            )}
            {job.data.attributes.closeDate && (
              <p>
                Close Date: <span>{job.data.attributes.closeDate}</span>
              </p>
            )}
            {job.data.attributes.Location && (
              <p>
                Location: <span>{job.data.attributes.Location}</span>
              </p>
            )}
            {job.data.attributes.positions && (
              <p>
                Positions: <span>{job.data.attributes.positions}</span>
              </p>
            )}
            {job.data.attributes.Type && (
              <p>
                Type: <span>{job.data.attributes.Type}</span>
              </p>
            )}
          </div>
        </div>
        {job.data.attributes.body && (
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: job.data.attributes.body }}
          ></div>
        )}
        <div className={styles.howToApply}>
          <h5>How To Apply</h5>
          {job.data.attributes.howToApply && (
            <div
              className={styles.howToApplyBody}
              dangerouslySetInnerHTML={{
                __html: job.data.attributes.howToApply,
              }}
            ></div>
          )}
        </div>

        {job.data.attributes.links.length !== 0 && (
          <div className={styles.links}>
            <h5>Links</h5>
            <ol>
              {job.data.attributes?.links?.map((link: Link) => (
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

  if (job && job.error)
    return (
      <section className={"noDataSection"} style={{ padding: "24px" }}>
        <h5>
          We are sorry, an error occurred while searching for the job, please
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
        We are sorry, an UNKNOWN error occurred while searching for the job!
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
