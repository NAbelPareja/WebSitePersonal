export const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between px-5 md:px-15 lg:px-30 py-5 fixed top-0 left-0 w-full bg-zinc-950 shadow-sm shadow-indigo-950">
      <div>
        <h1 className="font-bold text-xs sm:text-base">Abel</h1>
      </div>
      <div className="flex flex-row gap-3 sm:gap-5 md:gap-10">
        <a className=" text-xs sm:text-base hover:text-indigo-500 hover:font-bold" href="#sobre-mi">
          SOBRE MI
        </a>
        <a
          className="text-xs sm:text-base hover:text-indigo-500 hover:font-bold"
          href="#habilidades"
        >
          HABILIDADES
        </a>
        <a className="text-xs sm:text-base hover:text-indigo-500 hover:font-bold" href="#proyectos">
          PROYECTOS
        </a>
        <a className="text-xs sm:text-base hover:text-indigo-500 hover:font-bold" href="#contacto">
          CONTACTO
        </a>
      </div>
    </div>
  );
};
