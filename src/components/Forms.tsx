export function Forms(){
    return(
           
        <div className="flex gap-4 pt-12">
        <form action="" className="flex flex-col gap-2">

          <div className="flex gap-x-4">
          <div className="flex flex-col">
          <label htmlFor="">Nome*</label>
          <input type="text" className="bg-[#414141] text-white w-[200px] h-[36px] text-2xl"/>
          </div>

          <div className="flex flex-col">
          <label htmlFor="">Email*</label>
          <input type="text" className="bg-[#414141] text-white w-[200px] h-[36px] text-2xl" />
          </div>
          </div>

          <label htmlFor="">Mensagem*</label>
          <textarea placeholder="Olá! Gostaria de..." className="bg-[#414141] text-white w-[420px] h-[140px] max-h-[140px] text-2xl "></textarea>
          <button className="bg-black text-white my-8 ml-[120px] w-[180px] h-[36px]">Enviar</button>
        </form>
        </div>
        
    )
}