import { Helmet } from 'react-helmet-async';

// dentro do componente:
<Helmet>
  <title>Doações | Trabalhadores da Última Hora</title>
  <meta name="description" content="Espaço dedicado a doações." />
</Helmet>

import { Copy } from 'lucide-react';
import QrCode from "../assets/img/QrCode.png";
import { useTranslation } from 'react-i18next';

const Donation = () => {
  const { t } = useTranslation();
  const pixKey = "53.140.991/0001-74";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    alert(t('donation.pix.copied'));
  };

  return (
    <div className="py-12 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-900">{t('donation.title')}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('donation.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Opção PIX */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
              <span className="bg-primary-100 p-2 rounded-lg mr-3">💠</span> {t('donation.pix.title')}
            </h2>
            <p className="text-slate-600 mb-6">
              {t('donation.pix.description')}
            </p>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6 flex items-center justify-between">
              <span className="font-mono text-slate-800 font-bold">{pixKey}</span>
              <button onClick={copyToClipboard} className="text-primary-600 hover:text-primary-800 font-medium text-sm flex items-center">
                <Copy size={16} className="mr-1" /> {t('donation.pix.copy')}
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-slate-200 flex items-center justify-center rounded-lg">
               <img src={QrCode} alt={t('donation.pix.qrCodeAlt')} className="text-slate-400 text-sm" />
              </div>
            </div>
          </div>

          {/* Transferência Bancária */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
              <span className="bg-primary-100 p-2 rounded-lg mr-3">🏦</span> {t('donation.transfer.title')}
            </h2>
            <p className="text-slate-600 mb-6">
              {t('donation.transfer.description')}
            </p>
            
            <div className="space-y-4">
              <div className="pb-4 border-b border-slate-100">
                <span className="block text-sm text-slate-500">{t('donation.transfer.bank')}</span>
                <strong className="text-slate-800">756 - Banco Sicoob Credinosso</strong>
              </div>
              <div className="pb-4 border-b border-slate-100">
                <span className="block text-sm text-slate-500">{t('donation.transfer.branch')}</span>
                <strong className="text-slate-800">3327</strong>
              </div>
              <div className="pb-4 border-b border-slate-100">
                <span className="block text-sm text-slate-500">{t('donation.transfer.account')}</span>
                <strong className="text-slate-800">000014472-0</strong>
              </div>
              <div>
                <span className="block text-sm text-slate-500">{t('donation.transfer.cnpj')}</span>
                <strong className="text-slate-800">53.140.991/0001-74</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;