export function Section5(){
    return(
    <section className='flex justify-center relative z-20'>
    <div className="bg-[url('/imagens/bg-section-5.webp')] bg-no-repeat bg-center bg-cover w-[1920px] h-[940px] relative z-20 top-[-750px]">
      <div className='flex flex-row pt-64'>
      <div className='flex relative top-[-100px]'>
        <img src="/imagens/balanca.png" alt="" className='w-[1100px] h-[600px] object-cover'/>
      </div>
      <div className='flex flex-col gap-y-12'>
        <h1 className='text-5xl font-primarySemiBold w-[900px]'>Encontrar Um Equilíbrio Pode Ser <br />Difícil, Mas Uma Alimentação Saudável Não Precisa Ser</h1>
        <p className='text-4xl font-primaryLight w-[900px]'>Encontrar equilíbrio na alimentação pode ser desafiador, mas não impossível. Uma abordagem baseada em alimentos integrais e moderação pode simplificar o processo, permitindo uma relação saudável e sustentável com a comida. </p>
      </div>
      </div>
    </div>      
    </section>)
}