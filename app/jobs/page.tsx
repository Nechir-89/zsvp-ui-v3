import { openJobs } from "@/utils/services/jobs";
import styles from "./styles.module.css";
import JobCard from "./components/JobCard";
import Link from "next/link";

export default async function JobsPage() {
  const jobs = await openJobs();

  if (
    jobs &&
    jobs.data &&
    Array.isArray(jobs.data) &&
    jobs.data.length !== 0 &&
    jobs.meta
  )
    return (
      <div className={styles.jobsPage} style={{ paddingTop: "140px" }}>
        <div className={styles.pageHeader}>
          <h3>Jobs</h3>
          <span>
            Open Jobs <strong>{jobs.meta.pagination.total}</strong>
          </span>
        </div>
        <div className={styles.cardsWraper}>
          {jobs.data.map(
            (job: JobData) =>
              job.attributes && (
                <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.attributes.title}
                  openDate={job.attributes.openDate}
                  closeDate={job.attributes.closeDate}
                  location={job.attributes.Location}
                  positions={job.attributes.positions}
                  type={job.attributes.Type}
                  lang={job.attributes.textLang}
                />
              )
          )}
        </div>
      </div>
    );

  if (jobs.error)
    return (
      <section className={"noDataSection"} style={{ padding: "24px" }}>
        <h5>
          We are sorry, an error occurred while searching for jobs, please try
          again later!
        </h5>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Go to Home
        </Link>
      </section>
    );

  if (jobs && jobs.data && Array.isArray(jobs.data) && jobs.data.length === 0)
    return (
      <section className={"noDataSection"} style={{ padding: "24px" }}>
        <h5>We are sorry, No open jobs available for now!</h5>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Go to Home
        </Link>
      </section>
    );

  return (
    <section className={"noDataSection"} style={{ padding: "24px" }}>
      <h5>
        We are sorry, an UNKNOWN error occurred while searching for jobs, please
        try again later!
      </h5>
      <Link href="/" style={{ textDecoration: "underline" }}>
        Go to Home
      </Link>
    </section>
  );
}
