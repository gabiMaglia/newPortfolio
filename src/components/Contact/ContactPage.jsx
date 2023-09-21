import ContactForm from "../ContactForm/ContactForm";
import MiniNav from "../common/MiniNav/MiniNav";
import styles from "./contactPage.module.css";



const ContactPage = () => {
  const socialMedia = [
    { mode: "light", fontAwsome: 'fa-brands fa-instagram', link: 'https://www.instagram.com/gaberiel_maglia/' },
    { mode: "light", fontAwsome: 'fa-solid fa-envelopes-bulk', link: 'mailto:gab.maglia@gmail.com' },
    { mode: "light", fontAwsome: 'fa-brands fa-whatsapp', link: 'wa.link/4cm67w' },
    { mode: "light", fontAwsome: 'fa-brands fa-facebook', link: 'https://www.facebook.com/gaberielsk/' },
    { mode: "light", fontAwsome: "fa-brands fa-github", link: 'https://github.com/gabiMaglia' },
  ]
  return (

    <section  className={styles.contactCont}>
      <header className="row g-0">
        <MiniNav contact={socialMedia} />
      </header>

      <div className={`${styles.formCont}`}>
        <div className={styles.formTitle}>
          <strong>
            <h2>CONTACTA CON MIGO</h2>
          </strong>
          <p>Estoy a su disposicion para cualquier consulta o presupuesto</p>
        </div>
        <ContactForm />
      </div>
    </section>


  );
};

export default ContactPage;
