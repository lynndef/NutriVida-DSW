export function Section2(){
    return(
        <section className='flex justify-center gap-[98px] relative z-10 top-[-100px]'>
      <div className='flex flex-col bg-[#FE770B] w-[810px] h-[1460px] pt-20 gap-12'>
        <div className='pl-16'>
        <img src="/imagens/poke-vegetariano.png" alt="" className='w-[687px] h-[538px]'/>
        </div>
        <h1 className='text-white font-primarySemiBold text-5xl pl-10 '>Serviços em Nutrição <br/> Soluções Para Você</h1>
        <p className='text-white font-primaryExtraLight text-3xl pl-10  w-[700px]'>Cada paciente que chega em meu consultório possui um objetivo e uma expectativa diferente em face da uma dieta e de uma mudança corporal. Oferecemos serviços que possam atender à ampla maioria dos desejos tendo sempre por base um programa nutricional exclusivo</p>
      </div>
      <div className='flex flex-col bg-white w-[810px] h-[1460px] justify-center gap-12 items-center'>
        <h1 className='text-[#FE770B] font-primarySemiBold w-[790px] text-5xl pl-9'>Aprenda Como Se Alimentar De Forma Saudável Sem Mudar Seu Estilo De Vida Agitado</h1>
        <p className='text-[#A54D07] font-primaryLight text-3xl pl-10 '>Quem disse que dieta não pode ser gostosa de seguir? Realizo cardápios saudáveis e atrativos nos planos nutricionais, de olho nas metas corporais dos pacientes exemplo, os que procuram nutricionista para emagrecer ou adeptos de musculação para ganho de massa magra.</p>
        <img src="imagens/water.webp" alt="" className='w-[461px] h-[540px]' />
      </div>
    </section>
    )
}