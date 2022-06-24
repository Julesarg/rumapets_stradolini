import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpenText,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const facebook = <FontAwesomeIcon icon={faFacebook} />;
  const mail = <FontAwesomeIcon icon={faEnvelopeOpenText} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const message = <FontAwesomeIcon icon={faComments} />;

  return (
    <>
      <footer>
        <section className="cajaGde">
          <section className="cajaIzq">
            <div className="cajaLinks">
              <div className="linksDeInteresTitulo">Links de Interes</div>
              <Link to="./" className="linksDeInteresTexto">
                Home
              </Link>
              <Link to="./" className="linksDeInteresTexto">
                Productos
              </Link>
              <a href="/#" className="linksDeInteresTexto">
                Materiales
              </a>
              <a href="/#" className="linksDeInteresTexto">
                Adopciones
              </a>
              <a href="/#" className="linksDeInteresTexto">
                Faq
              </a>
            </div>
            <div className="cajaHorario">
              <div className="horarioTitulo">Horario Comercial</div>
              <div className="horarioTexto">Lunes a Viernes 10 a 20hrs</div>
              <div className="horarioTexto">Sabados 10 a 18hrs</div>
              <div className="horarioTexto">Domingos y feriados Cerrado</div>
            </div>
          </section>

          <section className="cajaCentro">
            <div className="cajaEncontranos">
              <p>Encontranos en</p>
            </div>
            <div className="cajaRedes">
              <a href="https://www.facebook.com/ruma.pets.5/" target="_blank">
                {facebook}
              </a>
              <a>{mail}</a>
              <a href="https://www.instagram.com/rumapets/" target="_blank">
                {instagram}
              </a>
              <a>{twitter}</a>
            </div>
            <div className="cajaDatos">
              <div className="cajasIndividuales">
                <p className="textoContacto">Caballito, Caba, Bs.As.</p>
                <p className="textoContacto">+549 (011) 5478-8558</p>
              </div>
            </div>
          </section>
          <section className="cajaDer">
            <div className="tuMensaje">
              <p>Consultas? Recomendaciones?</p>
              <p>Dejanos tu mensaje!</p>
            </div>
            <div className="cajaGato">
              <a>{message}</a>
            </div>
          </section>
        </section>
        <div className="contenedorCopyRight">
          <p className="copyRight">
            Copyright® 2022 RUMAPETS. Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
