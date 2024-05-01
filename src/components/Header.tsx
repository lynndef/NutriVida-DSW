export default function Header(){
    return(
        <div className="flex justify-end">
      <header className='flex items-center justify-between bg-[#FE770B] w-[868px] h-[94px] rounded-l-full mt-16 relative z-20 opacity-75'>
        <nav className="flex space-x-44 text-4xl pl-9 text-white font-primarySemiBold">
          <a href="#">Contato</a>
          <a href="#">Inicio</a>
          <a href="#">Sobre mim</a>
        </nav>
      </header>
      </div>
    )
}