import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

export function InboxList({ dados }) {
    return (
        <>
          {dados.map((item, index) => (
            <Card key={index} className="flex flex-col bg-black text-white border-[#27272A] w-[750px]">
              <CardHeader>
                <CardTitle>{item.nome_rem}</CardTitle>
                <h1 className="text-sm font-medium">{item.email_rem}</h1>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#96969E]  text-sm">{item.mensagem}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </>
      );
    };