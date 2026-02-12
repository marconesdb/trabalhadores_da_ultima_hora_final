import { Copy } from 'lucide-react';
import QrCode from "../assets/img/QrCode.png";


const Donation = () => {
  const pixKey = "53.140.991/0001-74"; // Exemplo

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    alert("Chave PIX copiada!");
  };

  return (
    <div className="py-12 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-900">Faça sua Doação</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sua contribuição ajuda a manter nossas atividades de assistência social, manutenção do do carro de apoio e compra de alimentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Opção PIX */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
              <span className="bg-primary-100 p-2 rounded-lg mr-3">💠</span> PIX
            </h2>
            <p className="text-slate-600 mb-6">
              A maneira mais rápida e sem taxas de ajudar. Utilize a chave abaixo ou escaneie o QR Code.
            </p>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6 flex items-center justify-between">
              <span className="font-mono text-slate-800 font-bold">{pixKey}</span>
              <button onClick={copyToClipboard} className="text-primary-600 hover:text-primary-800 font-medium text-sm flex items-center">
                <Copy size={16} className="mr-1" /> Copiar
              </button>
            </div>

            <div className="flex justify-center">
              {/* Placeholder QR Code */}
              <div className="w-48 h-48 bg-slate-200 flex items-center justify-center rounded-lg">
               <img src={QrCode} alt="QR Code da Instituição" className="text-slate-400 text-sm" />
              </div>
            </div>
          </div>

          {/* Transferência Bancária */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
              <span className="bg-primary-100 p-2 rounded-lg mr-3">🏦</span> Transferência
            </h2>
            <p className="text-slate-600 mb-6">
              Para DOC ou TED, utilize os dados da nossa conta bancária institucional.
            </p>
            
            <div className="space-y-4">
              <div className="pb-4 border-b border-slate-100">
                <span className="block text-sm text-slate-500">Banco</span>
                <strong className="text-slate-800">000 - Banco Exemplo</strong>
              </div>
              <div className="pb-4 border-b border-slate-100">
                <span className="block text-sm text-slate-500">Agência</span>
                <strong className="text-slate-800">0000-X</strong>
              </div>
              <div className="pb-4 border-b border-slate-100">
                <span className="block text-sm text-slate-500">Conta Corrente</span>
                <strong className="text-slate-800">12345-6</strong>
              </div>
              <div>
                <span className="block text-sm text-slate-500">CNPJ</span>
                <strong className="text-slate-800">00.000.000/0001-00</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Donation;