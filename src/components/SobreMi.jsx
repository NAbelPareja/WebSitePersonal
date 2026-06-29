import { HiEmojiHappy } from "react-icons/hi";

export const SobreMi = () => {
  return (
    <div className="mx-5 md:mx-40 lg:mx-80 py-30">
      <p className="text-indigo-200 py-5 flex flex-row gap-2"> < HiEmojiHappy className = "text-indigo-500 text-2xl"  /> Hola, bienvenido a mi portafolio</p>
      <h1 className="text-5xl font-bold">Abel</h1>
      <h1 className="text-5xl font-bold text-indigo-500 pt-2">Pareja</h1>
      <h3 className="text-indigo-200 py-5 text-xl">Frontend developer</h3>
      <p className="text-zinc-500 text-ml">
        Soy un desarrollador frontend de Perú apasionado por la creación de
        interfaces web modernas, funcionales y responsivas utilizando
        **JavaScript, React y Tailwind CSS**. Cuento con experiencia práctica
        desarrollando proyectos personales en los que he implementado
        componentes reutilizables, manejo de Hooks de React, diseño responsive y
        buenas prácticas de desarrollo. Mi perfil se complementa con el uso de
        **Git y GitHub** para el control de versiones. Actualmente continúo fortaleciendo mis
        conocimientos en tecnologías frontend y desarrollo web moderno.
      </p>
    </div>
  );
};
