import Head from "next/head";
import ContactForm from "../../components/contact/contact-form";
import { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages !" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
