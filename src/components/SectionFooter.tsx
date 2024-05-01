export function SectionFooter(){
    return(
        <section className='flex justify-center z-20 relative top-[-1100px]'>
        <div className="bg-[url('/imagens/bg-footer.webp')] bg-no-repeat bg-center bg-cover w-[1922px] h-[400px]">
          <div className='flex justify-center pt-20'>
            <h1 className='text-6xl font-primaryMedium'>Bem-Vindo</h1>
          </div>
          <div className='flex justify-end'>
          <div className='flex flex-col text-3xl font-primaryLight pr-40 gap-3'>
            <p>Informações</p>
            <li><a href="#">horários</a></li>
            <li><a href="#">local</a></li>
            <li><a href="#">contato</a></li>
            <li><a href="#">FAQs</a></li>      
          </div>
          </div>  
            <img src="/imagens/nutrivida-logo.webp" alt="" className='relative w-[300px] top-[-250px] pl-24'/>
        </div>
        </section>
    )
    }