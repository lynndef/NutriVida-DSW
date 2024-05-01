export function Section3(){
    return(
        <section className="flex justify-center">
        <div className="bg-[url('/imagens/bg-section-3.png')] bg-no-repeat bg-center bg-cover w-[1920px] h-[1250px] relative z-20 top-[-300px]">
         <div className='flex items-center pt-[400px] pl-72 gap-x-4'>    
             <img src="/imagens/nutri-image.webp" alt="" className='widht-[261px] h-[360px]'/> 
           <div className='flex flex-col text-white gap-y-14'>
             <h1 className='font-primarySemiBold text-3xl text-[#733300]'>Quem sou eu?</h1>
             <h1 className='font-primarySemiBold text-5xl w-[940px] h-[100px]'>Clara uma nutricionista apaixonada pela saúde através da alimentação correta</h1>
             <p className='font-primaryExtraLight text-3xl w-[903px] h-[185px]'>Com uma abordagem holística e empática, ela trabalha junto aos seus clientes para alcançar seus objetivos de forma sustentável. Comunicativa e atualizada, Clara oferece orientações baseadas em evidências para uma vida mais saudável e feliz.</p>
           </div>
           </div>
         </div>
       </section>
    )
}