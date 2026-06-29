import { Contactos } from "../components/Contactos";
import { Habilidades } from "../components/Habilidades";
import { Navbar } from "../components/Navbar";
import { Proyectos } from "../components/Proyectos";
import { SobreMi } from "../components/SobreMi";

export const Home = () => {
  return (
    <div className="fondo">
      <Navbar></Navbar>
      <section id="sobre-mi">
        <SobreMi></SobreMi>
      </section>
      <section id="habilidades">
        <Habilidades></Habilidades>
      </section>
      <section id="proyectos">
        <Proyectos></Proyectos>
      </section>
      <section id="contacto">
        <Contactos></Contactos>
      </section>
    </div>
  );
};
