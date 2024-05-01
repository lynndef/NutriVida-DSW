import { Forms } from "./Forms";

export function Section4(){
    return(
        <section className='flex justify-center gap-[98px] relative z-10 top-[-500px]'>
        <div className='flex flex-col bg-white w-[810px] h-[1460px] items-center pt-[200px]'>
        <h1 className='text-7xl font-primarySemiBold'>Fale Comigo!</h1>
        <div className='flex flex-row gap-14 pt-[60px] w-[600px] pl-24'>
          <div className='flex flex-col text-2xl font-primarySemiBold gap-y-12'>
            <li>Telefone</li>
            <li>Email</li>
            <li>Endereço</li>
          </div>
          <div className='flex flex-col text-2xl font-primaryMedium underline gap-y-12'>
          <p>(11) 4002-8922</p>
          <p>contato@nutri.com</p>
          <p>Avenida Brigadeiro <br/> Faria Lima, 3064
            <br />
            São Paulo, SP
          </p>
          </div>
          </div>
          <Forms/>
          </div>
          <div className=' bg-[#FE770B] w-[810px] h-[1460px]'>
          <div className='flex flex-col justify-center gap-y-10 pt-48 relative z-10'>
          <h1 className='text-5xl text-white font-primarySemiBold w-[800px] pl-14'>Agende sua consulta e dê o primeiro passo rumo a uma vida mais saudável hoje mesmo!</h1>
          <p className='text-3xl text-white font-primaryExtraLight w-[700px] pl-14'>Me mande uma mensagem e veremos  suas necessidades individuais, estou aqui para ajudá-lo(a) a adotar hábitos alimentares saudáveis e duradouros.</p>
          </div>
          <div className='relative z-20 top-[-180px]'>
          <img src="imagens/milkshake.webp" alt="" className='w-[900px] h-[900px] object-cover pt-[-700px]'/>
          </div>
          </div>
        </section>
    )
}