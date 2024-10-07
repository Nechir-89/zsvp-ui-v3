import { openJobs } from '@/utils/services/jobs';
import styles from './styles.module.css';
import JobCard from './components/JobCard'
import Link from 'next/link';
import { openAlerts } from '@/utils/services/alerts';

export default async function JobsPage() {

  const jobsPromise: Promise<Jobs> = openJobs();
  const jobs = await jobsPromise;


  const alertPromise: Promise<Alerts> = openAlerts();
  const alerts = await alertPromise

  if (jobs?.data?.length !== 0)
    return (
      <div
        className={styles.jobsPage}
        style={{ paddingTop: alerts.data.length == 0 ? '140px' : '200px' }}>
        <div className={styles.pageHeader}>
          <h3>Jobs</h3>
          <span>Open Jobs <strong>{jobs.meta.pagination.total}</strong></span>
        </div>
        <div className={styles.cardsWraper}>
          {
            jobs?.data?.map((job: Job) =>
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
          }
        </div>
      </div>
    )

  return (
    <section
      className={'noDataSection'}
      style={{ padding: '24px' }}>
      <h5>We are sorry, No open jobs available for now!</h5>
      <Link href='/' style={{ textDecoration: 'underline' }}>Go to Home</Link>
    </section>
  )
}
