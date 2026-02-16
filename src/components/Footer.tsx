import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1: Institucional */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-secondary">
            {t('footer.institutionalTitle')}
          </h3>
          <p className="text-primary-100 text-sm leading-relaxed mb-4">
            "{t('footer.institutionalQuote')}" <br/>
            {t('footer.institutionalDescription')}
          </p>
        </div>

        {/* Coluna 2: Contato */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-secondary">
            {t('footer.contactTitle')}
          </h3>
          <ul className="space-y-3 text-sm text-primary-100">
            <li className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{t('footer.addressLabel')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              <span>(38) 99207-2259</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <span>contato@trabalhadoresdaultimahora.com.br</span>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Links e Social */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-secondary">
            {t('footer.followTitle')}
          </h3>
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://www.instagram.com/trabalhadores.daultimahora/" 
              className="hover:text-secondary transition"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.facebook.com/trabalhadores.daultimahora.33" 
              className="hover:text-secondary transition"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-800 mt-10 pt-6 text-center text-xs text-primary-200 px-4">
        © {new Date().getFullYear()} {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;