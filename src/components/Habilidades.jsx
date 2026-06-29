import { FaAngular, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

export const Habilidades = () => {
  return (
    <div className="text-center">
      <p className="text-indigo-500">--Habilidades</p>
      <h2 className="text-5xl font-bold py-5">Tecnologias que uso</h2>
      <p className="px-5">
        Herramientas y frameworks con los que desarrollo soluciones
        modernas y escalables
      </p>
      <div className=" grid grid-cols-3 sm:grid-cols-4  md:flex md:flex-row justify-between py-20 px-5 md:px-20 lg:px-40">
        <div className="items-center shadow-lg shadow-indigo-950 p-2 rounded-md">
          <FaReact className="text-3xl text-indigo-500 mx-auto" />
          <h4>React</h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <IoLogoJavascript className="text-3xl text-yellow-500 mx-auto" />
          <h4 >javascript</h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <RiTailwindCssFill className="text-3xl text-blue-400 mx-auto" />
          <h4 >tailwind</h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <FaHtml5 className="text-3xl text-orange-500 mx-auto" />
          <h4>Html</h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <FaCss3Alt className="text-3xl text-blue-700 mx-auto"/>  
          <h4>CSS</h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <FaGithub className="text-3xl text-zinc-500 mx-auto" />
          <h4>GitHub</h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <FaFigma className="text-3xl text-indigo-500 mx-auto" />
          <h4>Figma</h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <FaAngular className="text-3xl text-red-500 mx-auto" />
          <h4>Angular</h4>
        </div>
      </div>
    </div>
  );
};
