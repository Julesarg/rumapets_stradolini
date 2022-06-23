const Footer = () => {
  return (
    <>
      <footer>
        <section className="cajaGde">
          <section className="cajaIzq">
            <div className="cajaLinks">
              <div className="linksDeInteresTitulo">Links de Interes</div>
              <a href="/#" className="linksDeInteresTexto">
                Home
              </a>
              <a href="./productos/index.html" className="linksDeInteresTexto">
                Productos
              </a>
              <a href="./materiales/index.html" className="linksDeInteresTexto">
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
                <img
                  src="./images/footer/facebook.png"
                  alt="facebook"
                  className="footerImgRedes"
                />
              </a>
              <a
                href="https://julesarg.github.io/idea-stradolini/404"
                target="_blank"
              >
                <img
                  src="./images/footer/email.png"
                  alt="correo"
                  className="footerImgRedes"
                />
              </a>
              <a href="https://www.instagram.com/rumapets/" target="_blank">
                <img
                  src="./images/footer/instagram.png"
                  alt="instagram"
                  className="footerImgRedes"
                />
              </a>
              <a
                href="https://julesarg.github.io/idea-stradolini/404"
                target="_blank"
              >
                <img
                  src="./images/footer/twitter.png"
                  alt="twitter"
                  className="footerImgRedes"
                />
              </a>
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
              <img src="./images/contacto/contacto.png" alt="contacto" />
              <a href="contacto/">
                <img
                  src="./images/contacto/contacto2.png"
                  alt="contacto2"
                  className="gatoImagen2"
                />
              </a>
            </div>
          </section>
        </section>
        <div className="contenedorCopyRight">
          <div className="copyRight">
            Copyright® 2021 RUMAPETS. Todos los derechos reservados
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
