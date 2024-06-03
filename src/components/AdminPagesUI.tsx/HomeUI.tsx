import { ScrollArea } from "../ui/scroll-area";

export function AdminHomeUI(){
    return(
        <>
        <section className="bg-white mx-auto">
        
       <div className="pt-24 flex flex-col gap-4 items-center">
       <img src="/imagens/nutrivida-logo.webp" alt="" className="mx-auto w-36"/>
       <h1 className="font-bold text-4xl flex justify-center">Bem-Vindo </h1>
       <p>Esse é o Admin Menu do Nutri-Vida.</p>
        
      <button className="bg-black text-white font-medium h-10 w-48 mx-auto rounded-md">Funcionalidades</button>
       </div>

       <ScrollArea className="h-[550px] w-[1000px] pt-12">
       <div className="prose mx-auto my-8">
    <h1 className="text-center">Base de Conhecimento</h1>
    
    <div>
        <h2>Gerenciamento de Pacientes</h2>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como adicionar um novo paciente?</summary>
            <p className="mt-2">Para adicionar um novo paciente, vá para a aba 'Pacientes', clique em 'Editar Dados' depos em 'Novo Paciente', preencha os campos necessários e salve.</p>
        </details>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como buscar um paciente pelo ID?</summary>
            <p className="mt-2">Na aba 'Pacientes', use a barra de busca para inserir o ID do paciente. Clique em 'Buscar' para visualizar os detalhes do paciente.</p>
        </details>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como editar informações de um paciente?</summary>
            <p className="mt-2">Encontre o paciente na lista ou usando a busca por ID, clique em 'Alterar Paciente' em 'Editar Dados', edite as informações necessárias e salve as alterações.</p>
        </details>
    </div>

    <div>
        <h2>Gerenciamento de Planos Nutricionais</h2>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como listar os planos nutricionais de um paciente?</summary>
            <p className="mt-2">Na aba 'Pacientes', encontre o paciente desejado, coloque o id na busca de planos clique em 'Buscar'. Você poderá visualizar, editar e exportar os planos.</p>
        </details>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como editar um plano nutricional?</summary>
            <p className="mt-2">Na aba 'Pacientes', encontre o paciente desejado, coloque o id na busca de planos clique em 'Buscar', escolha o plano que deseja editar, faça as alterações no editor de texto e salve.</p>
        </details>
    </div>
    
    <div>
        <h2>Inbox de Emails</h2>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como visualizar as mensagens recebidas?</summary>
            <p className="mt-2">Na aba 'Inbox de Emails', você verá uma lista de todas as mensagens recebidas. Clique em qualquer mensagem para visualizá-la por completo.</p>
        </details>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como responder a um email?</summary>
            <p className="mt-2">Clique na mensagem que deseja responder, preencha a area de texto com sua resposta e envie clicando no botão 'Enviar'.</p>
        </details>
    </div>
    
    <div>
        <h2>Gerenciador de Consultas</h2>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como agendar uma nova consulta?</summary>
            <p className="mt-2">Na aba 'Consultas', clique em 'Editar Dados', selecione o paciente, data e horário desejados, e salve a consulta.</p>
        </details>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como alterar uma consulta existente?</summary>
            <p className="mt-2">Encontre a consulta na lista ou use o filtro por data, clique em 'Alterar Consultas' no 'Editar Dados', faça as modificações necessárias e salve.</p>
        </details>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como deletar uma consulta?</summary>
            <p className="mt-2">Localize a consulta que deseja deletar, clique em 'Deletar Consultas' no 'Editar Dados' e confirme a ação para remover a consulta do sistema.</p>
        </details>
        <details className="my-4">
            <summary className="font-semibold cursor-pointer">Como ver quanto já ganhei?</summary>
            <p className="mt-2">Na aba 'Consultas', você pode visualizar o valor que você ja ganhou das consultas que já foram pagas.</p>
        </details>
    </div>
    
</div>

      </ScrollArea>
  
        </section>
        </>
    )
}