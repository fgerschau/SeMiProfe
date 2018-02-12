import React from 'react';
import './home.css';

const Home = () => (
  <div>
    <div className="row first">
      <div className="col-sm-12" style={{ padding: 0 }}>
        <div className="carousel slide" id="demo" data-ride="carousel">
          <ul className="carousel-indicators">
            <li className="active" data-target="#" data-slide-to="0" />
            <li data-target="#demo" data-slide-to="1" />
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="success-image" />
            </div>
            <div className="carousel-item">
              <div className="freedom-image" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#last" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#next" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 bg text-center img-center">
        <img
          className="rounded-circle"
          src="images/earth.jpg"
          alt="Cinque Terre"
          width="304"
          height="236"
        />
        <h3>Cualquier idioma, en cualquier momento </h3>
        <p>Todo lo que necesitas hacer es encontrar un profesor adecuado.</p>
      </div>
      <div className="col-md-6 text-center img-center">
        <img
          className="rounded-circle"
          src="images/anywhere.jpg"
          alt="Cinque Terre"
          width="304"
          height="236"
        />
        <h3>En casa, en la escuela, en l&iacute;nea </h3>
        <p>T&uacute; eliges cu&aacute;l es la mejor opción para ti.</p>
      </div>
    </div>
    <div className="row jumbotron justify-content-center align-items-center text-white bg-inverse">
      <h1>&iquest;Quienes somos?</h1>
    </div>
    <div className="row">
      <div className="col-sm-6">
        <div className="peoplebg" />
      </div>
      <div className="col-sm-6">
        <h2>Maestros, estudiantes, &iexcl;todo en uno! </h2>
        <p>
          Tenemos la base de estudiantes y profesores,
          lo que le permite encontrar un maestro perfecto
          y mostrarle a su maestro potencial que usted
          es un alumno perfecto.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
