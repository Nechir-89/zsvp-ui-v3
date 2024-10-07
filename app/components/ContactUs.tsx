"use client";
import styles from "./contactUs.module.css";
import { submitContactUs } from "../actions";
import SubmitButton from "./SubmitButton";
import { useRef } from "react";
import { useFormState } from "react-dom";

export default function ContactUs() {
  const [state, formAction] = useFormState(submitContactUs, undefined);

  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className={`container ${styles.contentWraper}`}>
      <h3 className={styles.title}>Contact us</h3>
      <div className={styles.wrpaer}>
        <div className={styles.formWraper}>
          <h3 className={styles.subHeader}>Have a question?</h3>
          <p className={styles.description}>
            Contact us whenever you have any question. We are <br />
            always here for you and will respond as soon as possible.
          </p>
          <span className={`${styles.bar}`}></span>

          <form
            ref={formRef}
            action={formAction}
            className={styles.contactusForm}
          >
            <div className={`${styles.inputWraper} ${styles.fnWraper}`}>
              <label htmlFor="fn">First Name</label>
              <input
                type="text"
                name="firstName"
                id="fn"
                placeholder="Your First Name "
              />
            </div>
            <div className={`${styles.inputWraper} ${styles.lnWraper}`}>
              <label htmlFor="ln">Last Name</label>
              <input
                type="text"
                id="ln"
                name="lastName"
                placeholder="Your Last Name "
              />
            </div>
            <div className={`${styles.inputWraper} ${styles.emailWraper}`}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email "
              />
            </div>
            <div className={`${styles.inputWraper} ${styles.messageWraper}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Text Message"
              ></textarea>
            </div>
            <div className={styles.submitBtnWraper}>
              <SubmitButton />
            </div>
          </form>
          <p
            style={
              state?.response?.state ? { color: "#D9D9D9" } : { color: "#F1921C" }
            }
          >
            {state?.response?.message}
          </p>
        </div>
        <div className={styles.mapWraper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1342.051332918764!2d42.98045924101868!3d36.867520167562624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szsvp!5e0!3m2!1sen!2siq!4v1695935560506!5m2!1sen!2siq"
            // allowfullscreen=''
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
