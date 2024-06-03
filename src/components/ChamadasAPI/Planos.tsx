import { useState, useEffect } from 'react';
import axios from 'axios';
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react';
import { Color } from '@tiptap/extension-color';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import { Toaster, toast } from 'sonner';
import { Bold, Italic, Strikethrough, PaintBucket, Download } from 'lucide-react';
import { BubbleButton } from '../ui/BubbleButton';
import jsPDF from 'jspdf';

export function Planos() {
  const [pacienteId, setPacienteId] = useState("");
  const [planoPaciente, setPlanoPaciente] = useState("");

  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color],
    content: '',
    editable: true
  });

  async function buscarPacientePlanos(event) {
    event.preventDefault();

    let url = `http://localhost:5000/pacientesplanos/${pacienteId}`;

    try {
      const response = await axios.get(url);
      const paciente = response.data;
      if (paciente && paciente.length > 0) {
        setPlanoPaciente(paciente[0].plano_nutricional);
        toast.success('Plano do paciente encontrado!');
      } else {
        setPlanoPaciente("");
        toast.error('Plano do paciente não encontrado');
      }
    } catch (error) {
      setPlanoPaciente("");
      toast.error('Plano do paciente não encontrado');
      console.error(error);
    }
  }

  async function salvarPlano() {
    let url = `http://localhost:5000/pacientesplanos/${pacienteId}`;

    try {
      await axios.put(url, {
        plano_nutricional: editor.getHTML(),
      });
      toast.success('Plano do paciente salvo com sucesso!');
    } catch (error) {
      toast.error('Erro ao salvar o plano do paciente');
      console.error(error);
    }
  }

  function exportarPdf() {
    const doc = new jsPDF();
    const conteudo = editor.getText();
    const larguraPagina = doc.internal.pageSize.getWidth();
    const alturaPagina = doc.internal.pageSize.getHeight();
    const margem = 10;
    const larguraMaxima = larguraPagina - 2 * margem;
    const alturaLinha = 10;
    const linhasTexto = doc.splitTextToSize(conteudo, larguraMaxima);
    let cursorY = margem;
  
    doc.setTextColor(0, 0, 0);
  
    linhasTexto.forEach(linha => {
      if (cursorY + alturaLinha > alturaPagina - margem) {
        doc.addPage();
        cursorY = margem;
      }
      doc.text(linha, margem, cursorY);
      cursorY += alturaLinha;
    });
  
    doc.save(`plano_paciente_${pacienteId}.pdf`);
  }
  
  useEffect(() => {
    if (editor) {
      editor.commands.setContent(planoPaciente);
    }
  }, [editor, planoPaciente]);

  Color.configure({
    types: ['textStyle'],
  });

  return (
    <>
    
      <input
        type="number"
        placeholder="Digite o ID do paciente..."
        className="text-black bg-gray-white h-[36px] ml-12 mt-12 rounded-sm border-[#151518] placeholder:text-black"
        value={pacienteId}
        onChange={(event) => setPacienteId(event.target.value)}
      />
      <button
        onClick={buscarPacientePlanos}
        className="bg-white text-black font-medium py-2 px-4 ml-2 rounded-sm h-[36px]"
      >
        Buscar
      </button>
      <button
        onClick={salvarPlano}
        className="bg-white text-black font-medium py-2 px-4 ml-2 rounded-sm h-[36px]"
      >
        Salvar
      </button>
      <button
        onClick={exportarPdf}
        className="bg-white text-black font-medium py-2 px-4 ml-2 rounded-sm h-[36px]"
      >
        <Download className='w-4 h-4'/>
      </button>
      <div className="mt-4 pt4">
        <div className="text-white pl-56 pt-4 text-sm font-medium">Plano Nutricional</div>
        <div className="prose text-white">
          <EditorContent editor={editor}>
            {editor && (
              <>
                <FloatingMenu
                  className="bg-zinc-700 gap-2 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col py-2 px-1"
                  editor={editor}
                  shouldShow={({ state }) => {
                    const { $from } = state.selection;
                    const TextoLinhaAtual = $from.nodeBefore?.textContent;
                    return TextoLinhaAtual === '/';
                  }}
                >
                  <button className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 h-[80px]'
                  onClick={() => {
                    editor.chain().focus().setParagraph().run();
                  }}  
                  >
                    <img src="https://www.notion.so/images/blocks/text/en-US.png" alt=""
                      className='w-12 border border-zinc-600 rounded' />
                    <div className='flex flex-col text-left'>
                      <span className='text-sm'>Texto</span>
                      <span className='text-xs text-zinc-400'>Começe escrevendo um texto simples.</span>
                    </div>
                  </button>

                  <button
                    className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 h-[80px]'
                    onClick={() => {
                      editor.chain().focus().toggleHeading({ level: 1 }).setColor('white').run();     
                    }}
                  >
                    <img src="https://www.notion.so/images/blocks/header.57a7576a.png" alt=""
                      className='w-12 border border-zinc-600 rounded' />
                    <div className='flex flex-col text-left'>
                      <span className='text-sm'>Cabeçalho h1</span>
                      <span className='text-xs text-zinc-400'>Titulo da seção grande.</span>
                    </div>
                  </button>

                  <button
                    className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 h-[80px]'
                    onClick={() => {
                      editor.chain().focus().toggleHeading({ level: 2 }).setColor('white').run();
                    }}
                  >
                    <img src="https://www.notion.so/images/blocks/header.57a7576a.png" alt=""
                      className='w-12 border border-zinc-600 rounded' />
                    <div className='flex flex-col text-left'>
                      <span className='text-sm'>Cabeçalho h2</span>
                      <span className='text-xs text-zinc-400'>Titulo da seção médio.</span>
                    </div>
                  </button>
                </FloatingMenu>

                <BubbleMenu className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600' editor={editor}>
                  <BubbleButton  
                    onClick={() => editor.chain().focus().toggleBold().setColor('white').run()}
                    data-active={editor.isActive('bold')}
                  > 
                    <Bold className='w-4 h-4'/>     
                  </BubbleButton>
                  <BubbleButton
                    onClick={() => editor.chain().focus().toggleItalic().setColor('white').run()}
                    data-active={editor.isActive('italic')}
                  >    
                    <Italic className='w-4 h-4'/>          
                  </BubbleButton>
                  <BubbleButton
                    onClick={() => editor.chain().focus().toggleStrike().setColor('white').run()}
                    data-active={editor.isActive('strike')}
                  >     
                    <Strikethrough className='w-4 h-4'/>       
                  </BubbleButton>
                  <BubbleButton
                    onClick={() => editor.chain().focus().setColor('white').run()}
                  >     
                    <PaintBucket color="white" className='w-4 h-4' />       
                  </BubbleButton>
                  <BubbleButton
                    onClick={() => editor.chain().focus().setColor('yellow').run()}
                  >     
                    <PaintBucket color="yellow" className='w-4 h-4' />       
                  </BubbleButton>
                  <BubbleButton
                    onClick={() => editor.chain().focus().setColor('blue').run()}
                  >     
                    <PaintBucket color="blue" className='w-4 h-4' />       
                  </BubbleButton>
                  <BubbleButton
                    onClick={() =>  editor.chain().focus().setParagraph().run()}
                  >     
                    P   
                  </BubbleButton>
                </BubbleMenu>
              </>
            )}
          </EditorContent>
        </div>
        {planoPaciente === "" && (
          <div className="text-white pl-48 text-sm">Nenhum plano encontrado</div>
        )}
      </div>
    </>
  );
}
