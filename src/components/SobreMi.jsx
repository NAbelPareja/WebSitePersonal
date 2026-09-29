import { HiEmojiHappy } from "react-icons/hi";

export const SobreMi = () => {
  return (
    <div className="mx-5 md:mx-40 lg:mx-80 py-30">
      <p className="text-indigo-200 py-5 flex flex-row gap-2"> < HiEmojiHappy className = "text-indigo-500 text-2xl"  /> Hola, bienvenido a mi portafolio</p>
      <h1 className="text-5xl font-bold">Abel</h1>
      <h1 className="text-5xl font-bold text-indigo-500 pt-2">Pareja</h1>
      <h3 className="text-indigo-200 py-5 text-xl">Full Stack developer</h3>
      <p className="text-zinc-500 text-ml">
        Soy un desarrollador Full Stack de Perú apasionado por la creación de aplicaciones web modernas, funcionales y altamente escalables. Cuento con experiencia práctica integrando interfaces de usuario responsivas en React y Tailwind CSS con arquitecturas backend robustas en ASP.NET Core (C#).
        En mis proyectos aplico patrones de diseño como Repository, transferencia segura mediante DTOs, persistencia en SQL Server y protección de endpoints con JWT. Mi perfil se complementa con el uso de Git y GitHub para el control de versiones, enfocado siempre en escribir código limpio y seguir las mejores prácticas de la ingeniería de software.. Actualmente continúo fortaleciendo mis
        conocimientos en tecnologías frontend y desarrollo web moderno.
      </p>
    </div>
  );
};
