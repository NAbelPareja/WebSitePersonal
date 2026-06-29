import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contactos = () => {
  return (
    <div className="text-center py-10">
      <p className="text-indigo-500">--Contacto</p>
      <h2 className="text-4xl font-bold pb-5">Hablemos!</h2>
      <p className="text-indigo-200">
        Estoy disponible para nuevas oportunidades laborales, colaboraciones y
        proyectos.
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:flex lg:flex-row justify-between px-5 md:px-15 lg:px-30 py-10">
        <div className="flex flex-row">
          <FaLinkedin className="text-4xl text-blue-400 my-auto mx-3 " />
          <div>
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/abelpareja/" target="_blank">
              www.linkedin.com/in/abelpareja
            </a>
          </div>
        </div>
        <div className="flex flex-row">
          <FaGithub className="text-4xl text-zinc-500 my-auto mx-3" />
          <div>
            <h4>GitHub</h4>
            <a href="https://github.com/NAbelPareja" target="_blank">
              https://github.com/NAbelPareja
            </a>
          </div>
        </div>
        <div className="flex flex-row">
          <SiGmail className="text-4xl text-red-400 my-auto mx-3" />
          <div>
            <h4>Correo</h4>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank">
              n.abelpareja@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
