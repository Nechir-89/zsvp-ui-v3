import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { openTenders } from "@/utils/services/tenders";

export default async function page() {
  const tenders = await openTenders();

  if (tenders && tenders.data && tenders.data.length !== 0)
    return (
      <div className={styles.tendersPage} style={{ paddingTop: "140px" }}>
        <div className={styles.pageHeader}>
          <h3>Tenders</h3>
          <span>
            Available Tenders <strong>{tenders.meta?.pagination?.total}</strong>
          </span>
        </div>
        <div className={styles.tendersWraper}>
          {tenders &&
            tenders.data &&
            tenders.data?.map((tender: TenderData) => (
              <article
                key={tender.id}
                className={styles.tender}
                dir={tender.attributes.textLang === "en" ? "ltr" : "rtl"}
              >
                <h5>
                  -{" "}
                  {tender && tender.attributes && tender.attributes.title && (
                    <Link href={`/tenders/${tender.id}`}>
                      {tender.attributes.title}
                    </Link>
                  )}
                </h5>
                {tender &&
                  tender.attributes &&
                  tender.attributes.openDate &&
                  tender.attributes.closeDate && (
                    <p className={styles.body}>
                      <span>
                        From <strong>{tender.attributes.openDate}</strong>
                      </span>
                      <span>
                        To <strong>{tender.attributes.closeDate}</strong>
                      </span>
                    </p>
                  )}
              </article>
            ))}
        </div>
      </div>
    );

  if (tenders && tenders.data && tenders.data.length === 0)
    return (
      <section className={"noDataSection"} style={{ padding: "24px" }}>
        <h5>We are sorry, No open tenders available for now!</h5>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Go to Home
        </Link>
      </section>
    );
  return (
    <section className={"noDataSection"} style={{ padding: "24px" }}>
      <h5>
        We are sorry, an error occurred while searching for tenders, please try
        again later!
      </h5>
      <Link href="/" style={{ textDecoration: "underline" }}>
        Go to Home
      </Link>
    </section>
  );
}
