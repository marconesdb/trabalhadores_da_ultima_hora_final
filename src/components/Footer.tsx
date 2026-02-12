import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1: Institucional */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-secondary">Solar de Jesus</h3>
          <p className="text-primary-100 text-sm leading-relaxed mb-4">
            "Fora da caridade não há salvação." <br/>
            Levando amor, alimento e esperança através do grupo Trabalhadores da Última Hora.
          </p>
        </div>

        {/* Coluna 2: Contato */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-secondary">Fale Conosco</h3>
          <ul className="space-y-3 text-sm text-primary-100">
            <li className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Rua Exemplo, 123 - Bairro, Cidade - UF</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              <span>(11) 99999-9999</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <span>contato@solardejesus.org</span>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Links e Social */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-secondary">Siga-nos</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-secondary transition"><Instagram size={24} /></a>
            <a href="#" className="hover:text-secondary transition"><Facebook size={24} /></a>
          </div>
          <h3 className="text-lg font-bold mb-2 text-secondary">Transparência</h3>
          <a href="/transparencia" className="text-sm text-primary-100 hover:underline">Prestação de Contas</a>
        </div>
      </div>
      <div className="border-t border-primary-800 mt-10 pt-6 text-center text-xs text-primary-200">
        © {new Date().getFullYear()} Instituição Espírita de Caridade Solar de Jesus. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;