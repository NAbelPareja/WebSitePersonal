import {FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDotnet, SiSwagger, SiPostman, SiJsonwebtokens    } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

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
          <FaFigma className="text-3xl text-indigo-500 mx-auto" />
          <h4>Figma</h4>
        </div>
      </div>
      
      <div className=" grid grid-cols-3 sm:grid-cols-4  md:flex md:flex-row justify-between pt-5 pb-20 px-5 md:px-20 lg:px-40">
        <div className="items-center shadow-lg shadow-indigo-950 p-2 rounded-md">
          <SiDotnet className="text-3xl text-indigo-500 mx-auto" />
          <h4>.Net</h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <DiMsqlServer className="text-3xl text-red-500 mx-auto" />
          <h4 >SQL Server</h4>   
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <SiSwagger  className="text-3xl text-green-400 mx-auto" />
          <h4 >Swagger </h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <SiPostman  className="text-3xl text-orange-500 mx-auto" />
          <h4>Postman</h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <SiJsonwebtokens  className="text-3xl text-zinc-300 mx-auto"/>  
          <h4>JSON Web Tokens</h4>
        </div>
        <div className="shadow-lg shadow-indigo-950 p-2 rounded-lg">
          <FaGithub className="text-3xl text-zinc-500 mx-auto" />
          <h4>GitHub</h4>
        </div>
      </div>
    </div>
  );
};
