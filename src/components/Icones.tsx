import { Forget } from "./Forget";
import { DialogContent, DialogTrigger, Dialog} from "./ui/dialog";

export function Icones () {

    return (
    <div className='relative top-[-80px] pl-[30px] z-10'>
    <img src="/imagens/nutrivida-logo-white.webp" alt="" className='w-[150px]'/>
    <img src="/imagens/avatar-logo.webp" alt="" className='relative top-[20px] ml-6 avatar w-[90px]' />

    <Dialog>
          <DialogTrigger asChild>         
          <img src="/imagens/cadeado.webp" alt="" className='relative top-[50px] ml-4 w-[100px]'/>
          </DialogTrigger> 
          <DialogContent>
            <Forget/>
          </DialogContent>
        </Dialog>
    
    </div>
    )
}
