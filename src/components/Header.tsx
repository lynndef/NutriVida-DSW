import { NavLink } from "react-router-dom";

export default function Header(){
  const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
  return(
      <div className="flex justify-end">
          <header className='flex items-center justify-between bg-[#FE770B] w-[868px] h-[94px] rounded-l-full mt-16 relative z-20 opacity-75'>
              <nav className="flex space-x-44 text-4xl pl-9 text-white font-primarySemiBold">
                  <NavLink to="/" onClick={() => scrollToSection('inicio')}>Inicio</NavLink>
                  <NavLink to="/" onClick={() => scrollToSection('section4')}>Contato</NavLink>
                  <NavLink to="/" onClick={() => scrollToSection('section3')}>Sobre mim</NavLink>
              </nav>
          </header>
      </div>
  )
}