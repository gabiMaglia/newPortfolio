import styles from "./constactForm.module.css"

const ContactForm = () => {
    return (

        <form className={`row g-3 mb-4 ${styles.contactForm}`}>
            <div className={`${styles.formCont} g-0 d-flex gap-1 p-1`}>
                <div>
                    <div className={`mb-3 ${styles.nombre}`}>
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
                            placeholder="Name?"
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
                            placeholder="Lastname?"
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
                            placeholder="Where do you live??"
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
                            placeholder="Who do you work for?"
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
            <button className={`${styles.button}`} type="submit">
                Send
            </button>
        </form>

    )
}

export default ContactForm