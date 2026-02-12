const campaigns = [
  {
    title: "Campanha do Inverno",
    description: "Arrecadação de cobertores e agasalhos para a população de rua.",
    status: "Ativo",
    needs: ["Cobertores", "Meias", "Casacos"]
  },
  {
    title: "Oficina de Costura",
    description: "Confecção de enxovais para recém-nascidos de famílias carentes.",
    status: "Permanente",
    needs: ["Tecidos", "Lã", "Linhas"]
  },
  {
    title: "Manutenção da Casa",
    description: "Recursos para pintura e reparos no telhado da instituição.",
    status: "Urgente",
    needs: ["Recursos Financeiros", "Tinta", "Mão de obra voluntária"]
  }
];

const Campaigns = () => {
  return (
    <div className="py-12 container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-primary-900">Campanhas em Andamento</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((camp, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 flex flex-col">
            <div className="h-40 bg-primary-100 flex items-center justify-center">
              {/* Placeholder IMG */}
              <span className="text-primary-400">Imagem da Campanha</span>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-primary-800">{camp.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full font-bold ${camp.status === 'Urgente' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                  {camp.status}
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4">{camp.description}</p>
              <div>
                <strong className="text-xs uppercase text-slate-400">Necessidades:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {camp.needs.map((item, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
              <button className="text-primary-600 font-bold text-sm hover:underline">
                Saiba como doar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;