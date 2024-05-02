export function Forget(){
    return(
        <>
        <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-4xl font-primarySemiBold">Esqueceu sua senha</h1>
            <input className="placeholder:text-center bg-[#414141] rounded-full text-4xl font-primarySemiBold text-white h-16" type="text" placeholder="Insira seu email"/>
            <button className="bg-black h-16 w-[400px] text-2xl font-primaryRegular text-white">Enviar link de recuperação</button>
        </div>
        </>
    )
}