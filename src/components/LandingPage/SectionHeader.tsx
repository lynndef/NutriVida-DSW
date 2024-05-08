import { FormsLogin } from "../Forms/FormsLogin"
import Header from "./Header"

export function SectionHeader(){
    const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

    return(
    <section className="flex justify-center" id="inicio" >
    <div className="bg-[url('/imagens/bg-section-1.webp')] bg-no-repeat bg-center bg-cover w-[1920px] h-[916px] relative z-20">
    <Header/>
        <div className='flex flex-col items-center pt-24'>
          <h1 className='text-white text-[121px] font-Trebuchet'>NUTRIVIDA</h1>
          <p className='text-white text-4xl font-Yaldevi my-[-30px]'>treinamento especializado em alimentação</p>
          <button onClick={() => scrollToSection('section4')} className='text-[#FE770B] font-primaryBold bg-white text-4xl mt-32 w-[442px] h-[86px]'>Contate-me</button>
        </div>
        <div className='relative top-[-580px] pl-[20px] z-10'>
      <img src="/imagens/nutrivida-logo-white.webp" alt="" className='w-[150px]'/>
      </div>
      <FormsLogin/>
      </div>
    </section>
    )
}