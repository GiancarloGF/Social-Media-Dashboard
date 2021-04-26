import React, { useRef } from "react";
import "./switch.css";

function Switch(props) {
  const ref = useRef(null); //Usamos este hook para guardar una referencia a un elemento dado que tiene una propiedad ref. equivalente a e.target

  function handleChange() {
    //Con este manejador le enviamos al estado padre booleanos segun el valor del checked para cambiar el color y para cambiar el valor del input de checked(De esta manera se traslada nuestro circulo)
    props.setDarkMode(ref.current.checked);
    props.setChecked(ref.current.checked);
  }

  // Manejamos el evento onChange de nuestro input switch---------------------------
  // Opcion 1
  // function handleChange(e) {
  //   if (!e.target.checked) {
  //     document.body.classList.remove("is-light-mode");
  //     document.body.classList.add("is-dark-mode");
  //   } else {
  //     document.body.classList.remove("is-dark-mode");
  //     document.body.classList.add("is-light-mode");
  //   }
  // }

  // Opcion 2
  // function handleChange() {
  //   setChecked(ref.current.checked);

  //   if (ref.current.checked) {
  //     // setChecked(false);
  //     document.body.classList.remove("is-light-mode");
  //     document.body.classList.add("is-dark-mode");
  //   } else {
  //     // setChecked(true);
  //     document.body.classList.remove("is-dark-mode");
  //     document.body.classList.add("is-light-mode");
  //   }
  // }

  // -----------------------------------------------------------------------------

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        ref={ref}
        onChange={handleChange}
        type="checkbox"
        className="checkbox"
        id="checkbox"
        // En este checked traemos el valor del nuestro estado padre en App.js, segun el valor que nos devuelva la validacion(Si tenemos el darkmode en windows o no)
        checked={props.checked}
      />
      <label className="switch" htmlFor="checkbox" />
    </div>
  );
}

export default Switch;
