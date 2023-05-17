import MiniNav from "../common/MiniNav/MiniNav";
import "./contact-page.css";

const ContactPage = () => {
  return (
    <>
      <header className="row g-0 mb-5">
        <MiniNav />
      </header>

      <article className=" p-4 pt-5 container-fluid section-container d-flex flex-column article  ">
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
            <button className="button mt-3" type="submit">
              Enviar
            </button>
          </form>
        </section>
      </article>
    </>
  );
};

export default ContactPage;