import { FormsLogin } from "./FormsLogin"

export function SectionHeader(){
    return(
    <section className="flex justify-center">
    <div className="bg-[url('/imagens/bg-section-1.webp')] bg-no-repeat bg-center bg-cover w-[1920px] h-[916px] relative z-20">
    <div className="flex justify-end">
      <header className='flex items-center justify-between bg-[#FE770B] w-[868px] h-[94px] rounded-l-full mt-16 relative z-20'>
        <nav className="flex space-x-44 text-4xl pl-9 text-white font-primarySemiBold">
          <a href="#">Contato</a>
          <a href="#">Inicio</a>
          <a href="#">Sobre mim</a>
        </nav>
      </header>
      </div>
        <div className='flex flex-col items-center pt-24'>
          <h1 className='text-white text-[121px] font-Trebuchet'>NUTRIVIDA</h1>
          <p className='text-white text-4xl font-Yaldevi my-[-30px]'>treinamento especializado em alimentação</p>
          <button className='text-[#FE770B] font-primaryBold bg-white text-4xl mt-32 w-[442px] h-[86px]'>Contate-me</button>
        </div>
        <div className='relative top-[-580px] pl-[20px] z-10'>
      <img src="/imagens/nutrivida-logo-white.webp" alt="" className='w-[150px]'/>
      </div>
      <FormsLogin/>
      </div>
    </section>
    )
}