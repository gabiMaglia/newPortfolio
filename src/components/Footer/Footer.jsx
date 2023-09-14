import styles from "./footer.module.css";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className=" bg-black ">
        <div>
          <span className="text-muted d-flex">
            © 2023 Gabriel Maglia
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
