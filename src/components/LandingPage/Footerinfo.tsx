import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export function Footerinfo(props){
    return(
        <>
       <Dialog>
        <DialogTrigger>
            <p>{props.link}</p>       
        </DialogTrigger>
        <DialogContent>
            <div className="flex flex-col prose font-bold">
            <p>Telefone: (11) 4002-8922</p>
            <p>Email: contato@nutri.com</p>
            <p>Endereço: Avenida Brigadeiro Faria Lima, 3064 São Paulo, SP</p>
            </div>
        </DialogContent>
       </Dialog>
        </>
    )
}