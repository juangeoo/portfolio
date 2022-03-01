import React from 'react';
import "./Footer.css"
import "../header/Header.css"

function Footer() {
  return (
    <section>
  <hr></hr>

  <div className="container__bar flex-center about">
    <h2 className="container__bar-h2">Juan Geoghegan</h2>
    <div className="container__bar-items flex-center about">
      <a href="CV_JuanGeoghegan.pdf" download target="_blank"><h2 className="container__bar-h2 featured">Download CV</h2></a>
      <a href="https://www.linkedin.com/in/juangeo/" target="_blank"><h2 className="container__bar-h2">Linkedin</h2></a>
      <a href="https://www.behance.net/juangeo" target="_blank"><h2 className="container__bar-h2">Behance</h2></a>
      <h2 className="container__bar-h2">juansantiagogeo@gmail.com</h2>
    </div>
  </div>
</section>
  )
}

export default Footer;
