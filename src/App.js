import React, { useState, useEffect } from "react";
import Header from "./header";
import TopCardList from "./top-card-list";
import "./global.css";
import Overview from "./overview";
import Switch from "./switch";

function App(props) {
  // Estos son los valores iniciales que tendran nuestro componente. Luego se modifica con nuestro useEfect o con un evento en input de Switch.js
  const [darkMode, setDarkMode] = useState(false); //Estado para manejar la clase de cambio de color.
  const [checked, setChecked] = useState(false); //Estado para manejar el valor checked de nuestro input en switch.js
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode"; //Guardamos el valor booleano para luego pasarlo a nuestro main como classname(y asi cambiar el color con css)

  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Luego de que nuestro componente se monta, hacemos una validacion para cambiar de color a nuestra app dependiendo de la preferencia de color de window en ese momento.
  useEffect(() => {
    //Se usa una vez que nuestro componente este montado.
    const mq = window.matchMedia("(prefers-color-scheme:dark)"); //Valor
    mq.addListener(changeMedia); //Agregamos este mediaquery en js para mirar cambios en nuestra variable mq. Cuando haya cambios llamamos a nuestra funcion changeMedia.*ESTUDIAR MAS
    setDarkMode(mq.matches); //metodo con valor booleano. Modificamos nuestro estado darkMode.
    setChecked(mq.matches); //metodo con valor booleano. Modificamos nuestro estado checked.
  }, []);

  function changeMedia(mq) {
    setDarkMode(mq.matches); //metodo con valor booleano. Modificamos nuestro estado darkMode.
    setChecked(mq.matches); //metodo con valor booleano. Modificamos nuestro estado checked.
  }
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
}

export default App;

/* EN COMPONENTE SWITCH:
  le pasamos setDarkMode={setDarkMode} para poder realizar un cambio de estado en color desde un componente hijo(switch.js). Los datos fluyen de hijos a padres.
  le pasamos setChecked={setChecked} para poder realizar un cambio de estado en checked desde un componente hijo(switch.js). Los datos fluyen de hijos a padres.
  le pasamos checked={checked} para ponerle un valor por defecto a nuestra propiedad checked en muestro input en switch.js. Los datos fluyen de padres a hijos. 
  */
