import { useEffect } from "react";
import MiniNav from "../common/MiniNav/MiniNav";
import "./contact-page.css";



const ContactPage = () => {
  const socialMedia =[
    { mode: "light", fontAwsome: 'fa-brands fa-instagram', link : 'https://www.instagram.com/gaberiel_maglia/' },
    { mode: "light", fontAwsome: 'fa-solid fa-envelopes-bulk', link : 'gab.maglia@gmail.com'  },
    { mode: "light", fontAwsome: 'fa-brands fa-whatsapp', link : 'wa.link/4cm67w' },
    { mode: "light", fontAwsome: 'fa-brands fa-facebook', link : 'https://www.facebook.com/gaberielsk/' },
    { mode: "light", fontAwsome: 'fa-brands fa-linkedin', link : 'https://www.linkedin.com/in/gabriel-maglia-449577238/' },    
    { mode: "light", fontAwsome: "fa-brands fa-github", link : 'https://github.com/gabiMaglia' },    
  ]

  return (
    <>
      <header className="row g-0">
        <MiniNav contact={socialMedia} />
      </header>

      <article className=" p-4 article  ">
        <section className="form-title">
          <strong>
            <h2>CONTACTA CON MIGO</h2>
          </strong>
          <p>Estoy a su disposicion para cualquier consulta o presupuesto</p>
        </section>

        <section className="form-cont">
          <form className="row g-3 mb-4  contact-form">
            <div className="form-cont-1 g-0 d-flex gap-1 p-1">
              <div>
                <div className="mb-3 nombre">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="exampleFormControlInput1"
                    placeholder="Como te llamas?"
                  />
                </div>
                <div className="mb-3 apellido">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="exampleFormControlInput1"
                    placeholder="Como es tu apellido?"
                  />
                </div>
              </div>
              <div>
                <div className="mb-3 ciudad">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Ciudad
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="exampleFormControlInput1"
                    placeholder="Donde vives?"
                  />
                </div>
                <div className="mb-3 empresa">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="exampleFormControlInput1"
                    placeholder="A que empresa perteneces?"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3 email">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Direccion de email
              </label>
              <input
                type="email"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="nombre@xxxxx.com"
              />
            </div>
            <div className="mb-3 textCont">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Mensaje
              </label>
              <textarea
                className="form-control text "
                id="exampleFormControlTextarea1"
              ></textarea>
            </div>
            <button className=" button" type="submit">
              Enviar
            </button>
          </form>
        </section>
      </article>
    </>
  );
};

export default ContactPage;
