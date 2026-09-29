import { CgWebsite } from "react-icons/cg";
import {
  FaAngular,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

import { SiDotnet, SiSwagger, SiPostman, SiJsonwebtokens    } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

import pb1 from "../assets/pb1Beer.png";
import pb1_1 from "../assets/Captura_Postman_Beer.png";
import p1iMac from "../assets/p1-iMac.png";
import p2iMac from "../assets/p2-iMac.png";
import p3iMac from "../assets/p3-iMac.png";
import p4iMac from "../assets/p4-iMac.png";

export const Proyectos = () => {
  return (
    <div className="text-center">
      <p className="text-indigo-500">-- Portafolio</p>
      <h2 className="text-5xl font-bold pb-5">Mis proyectos</h2>
      <p className="text-indigo-200 px-5">
        Algunos de los proyectos mas relevantes que he desarrollado
      </p>

      
      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-30 py-10 gap-10">
        <div className = "w-full lg:w-5/3">
          <img
            className="rounded-md "
            src={pb1_1}
            alt="proyecto1"
          />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-5 "> 
          <h2 className="text-2xl">API REST para Gestión de Cervezas</h2>
          <p className="text-indigo-200">
            API REST robusta desarrollada para el control y catalogación de productos cerveceros, marcas y proveedores. Diseñada bajo una arquitectura limpia utilizando el patrón Repository y transferencia segura con DTOs. Cuenta con un sistema completo de autenticación y autorización mediante JWT y persistencia en SQL Server..
          </p>
          <div className="flex flex-row justify-between">
            <SiDotnet className="text-3xl text-indigo-500 mx-auto" />
            <DiMsqlServer className="text-3xl text-red-500 mx-auto" />
            <SiJsonwebtokens  className="text-3xl text-zinc-300 mx-auto"/>
            <SiSwagger  className="text-3xl text-green-400 mx-auto" />
            <SiPostman  className="text-3xl text-orange-500 mx-auto" />
          </div>
          <div className="flex flex-row gap-10 px-auto ">
            <button className="bg-zinc-800 text-indigo-100 text-xl px-3 py-1 shadow-md shadow-zinc-700 border-none rounded-md  hover:bg-zinc-950">
              <a
                href="https://github.com/NAbelPareja/MiApisBeerBackend"
                target="_blank"
                className="flex flex-row"
              >
                <FaGithub className="my-auto mx-1" />
                Git Hub
              </a>
            </button>
          </div>
        </div>
      </div>
      <hr className="text-indigo-300 mx-50" />

      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-30 py-10 gap-10">
        <div>
          <img
            className="rounded-md"
            src={p1iMac}
            alt="proyecto1"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">Control de Finanzas</h2>
          <p className="text-indigo-200">
            Aplicacion Web desarrollado para registrar gastos/ingresos
            personales y de esta forma controlar y hacer analisis por medio de
            graficos interactivos.
          </p>
          <div className="flex flex-row justify-between">
            <FaReact className="text-3xl text-indigo-500 mx-auto m-5" />
            <IoLogoJavascript className="text-3xl text-yellow-500 mx-auto m-5" />
            <RiTailwindCssFill className="text-3xl text-blue-400 mx-auto m-5" />
            <FaHtml5 className="text-3xl text-orange-500 mx-auto m-5" />
          </div>
          <div className="flex flex-row gap-10 px-auto md:pl-10">
            <button className="bg-indigo-500 text-xl px-3 py-1 rounded-md flex flex-row   shadow-md shadow-indigo-400 hover:bg-indigo-800">
              <a
                href="https://gastosper.netlify.app/home"
                target="_blank"
                className="rounded-md flex flex-row "
              >
                <CgWebsite className="my-auto mx-1" />
                Ver demo
              </a>
            </button>
            <button className="bg-zinc-800 text-indigo-100 text-xl px-3 py-1 shadow-md shadow-zinc-700 border-none rounded-md  hover:bg-zinc-950">
              <a
                href="https://github.com/NAbelPareja"
                target="_blank"
                className="flex flex-row"
              >
                <FaGithub className="my-auto mx-1" />
                Git Hub
              </a>
            </button>
          </div>
        </div>
      </div>

      <hr className="text-indigo-300 mx-50" />

      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-30 py-10 gap-10">
        <div>
          <img
            className="rounded-md"
            src={p3iMac}
            alt="proyecto2"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">Buscador de peliculas</h2>
          <p className="text-indigo-200">
            Aplicacion Web desarrollada para buscar todo tipo de peliculas
            mediante el consumo de una Api externa.
          </p>
          <div className="flex flex-row justify-between">
            <FaReact className="text-3xl text-indigo-500 mx-auto m-5" />
            <IoLogoJavascript className="text-3xl text-yellow-500 mx-auto m-5" />
            <FaHtml5 className="text-3xl text-orange-500 mx-auto m-5" />
            <FaCss3Alt className="text-3xl text-blue-700 mx-auto m-5" />
          </div>
          <div className="flex flex-row gap-10 px-auto md:pl-10">
            <button className="bg-indigo-500 text-xl px-3 py-1 rounded-md flex flex-row   shadow-md shadow-indigo-400 hover:bg-indigo-800">
              <a
                href="https://buscadorpeliculasinfo.netlify.app/"
                target="_blank"
                className=" flex flex-row"
              >
                {" "}
                <CgWebsite className="my-auto mx-1" />
                Ver demo
              </a>
            </button>
            <button className="bg-zinc-800 text-indigo-100 text-xl px-3 py-1 shadow-md shadow-zinc-700 border-none rounded-md  hover:bg-zinc-950">
              <a
                href="https://github.com/NAbelPareja/Buscador-de-Peliculas"
                target="_blank"
                className=" flex flex-row"
              >
                <FaGithub className="my-auto mx-1" />
                Git Hub
              </a>
            </button>
          </div>
        </div>
      </div>

      <hr className="text-indigo-300 mx-50" />

      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-30 py-10 gap-10">
        <div>
          <img
            className="rounded-md"
            src={p2iMac}
            alt="proyecto3"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">Reporte de reciclaje</h2>
          <p className="text-indigo-200">
            Aplicacion Web desarrollado para para reportar incidencias de
            desechos en lugares pubiclos para la rapida accion de la
            municipalidad.
          </p>
          <div className="flex flex-row justify-between">
            <FaAngular className="text-3xl text-red-500 mx-auto m-5" />
            <IoLogoJavascript className="text-3xl text-yellow-500 mx-auto m-5" />
            <FaHtml5 className="text-3xl text-orange-500 mx-auto m-5" />
            <FaCss3Alt className="text-3xl text-blue-700 mx-auto m-5" />
          </div>
          <div className="flex flex-row gap-10 px-auto md:pl-10">
            <button className="bg-indigo-500 text-xl px-3 py-1 rounded-md flex flex-row   shadow-md shadow-indigo-400 hover:bg-indigo-800">
              <a
                href="https://ecohuanta.netlify.app/home"
                target="_blank"
                className=" flex flex-row"
              >
                <CgWebsite className="my-auto mx-1" />
                Ver demo
              </a>
            </button>
            <button className="bg-zinc-800 text-indigo-100 text-xl px-3 py-1 shadow-md shadow-zinc-700 border-none rounded-md  hover:bg-zinc-950">
              <a
                href="https://github.com/NAbelPareja/Reciclage"
                target="_blank"
                className=" flex flex-row"
              >
                <FaGithub className="my-auto mx-1" />
                Git Hub
              </a>
            </button>
          </div>
        </div>
      </div>

      <hr className="text-indigo-300 mx-50" />

      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-30 py-10 gap-10">
        <div>
          <img
            className="rounded-md"
            src={p4iMac}
            alt="proyecto3"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">Gestor de Libros</h2>
          <p className="text-indigo-200">
            Aplicacion Web desarrollado para gestionar libros, permitiendo registrar, editar y eliminar libros de una biblioteca personal, tambien permite buscar libros por titulo, autor categoria etc.
          </p>
          <div className="flex flex-row justify-between">
            <FaReact className="text-3xl text-indigo-500 mx-auto m-5" />
            <IoLogoJavascript className="text-3xl text-yellow-500 mx-auto m-5" />
            <RiTailwindCssFill className="text-3xl text-blue-400 mx-auto m-5" />
            <FaHtml5 className="text-3xl text-orange-500 mx-auto m-5" />
            <FaCss3Alt className="text-3xl text-blue-700 mx-auto m-5" />
          </div>
          <div className="flex flex-row gap-10 px-auto md:pl-10">
            <button className="bg-indigo-500 text-xl px-3 py-1 rounded-md flex flex-row   shadow-md shadow-indigo-400 hover:bg-indigo-800">
              <a
                href="https://registrolibros.netlify.app/home"
                target="_blank"
                className=" flex flex-row"
              >
                <CgWebsite className="my-auto mx-1" />
                Ver demo
              </a>
            </button>
            <button className="bg-zinc-800 text-indigo-100 text-xl px-3 py-1 shadow-md shadow-zinc-700 border-none rounded-md  hover:bg-zinc-950">
              <a
                href="https://github.com/NAbelPareja/Registro-de-Libros.git"
                target="_blank"
                className=" flex flex-row"
              >
                <FaGithub className="my-auto mx-1" />
                Git Hub
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
