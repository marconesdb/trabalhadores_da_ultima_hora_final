import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Donation from './pages/Donation';
import Campaigns from './pages/Campaigns';
import QuemSomos from './pages/QuemSomos';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';
import NossasAções from './pages/NossasAções';
import DistribuicaoAlimentos from './pages/DistribuiçãoAlimentos';
import ApoioHospitalar from './pages/ApoioHospitalar';
import BazarBeneficiente from './pages/BazarBeneficiente';
import Oracao from './pages/Oracoes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ✅ Rotas principais */}
          <Route index element={<Home />} />
          <Route path="doacoes" element={<Donation />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="campanhas" element={<Campaigns />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="oracoes" element={<Oracao />} />
          <Route path="contato" element={<Contato />} />
          <Route path="nossas-acoes" element={<NossasAções />} />
          <Route path="distribuicao-alimentos" element={<DistribuicaoAlimentos />} />
          <Route path="apoio-hospitalar" element={<ApoioHospitalar />} />
          <Route path="bazar-beneficiente" element={<BazarBeneficiente />} />

          {/* 🔀 Redirecionamentos 301 — URLs antigas/duplicadas */}
          <Route path="home.html" element={<Navigate to="/" replace />} />
          <Route path="contato/contato.html" element={<Navigate to="/contato" replace />} />
          <Route path="contato/index.html" element={<Navigate to="/contato" replace />} />
          <Route path="sobre/sobre.html" element={<Navigate to="/quem-somos" replace />} />
          <Route path="apoio-hospitalar/apoio-hospitalar.html" element={<Navigate to="/apoio-hospitalar" replace />} />
          <Route path="doacoes/doacoes.html" element={<Navigate to="/doacoes" replace />} />
          <Route path="idiomas/frances/français.html" element={<Navigate to="/" replace />} />
          <Route path="idiomas/espanhol/español.html" element={<Navigate to="/" replace />} />

          {/* ❌ Rota 404 */}
          <Route path="*" element={<div className="p-20 text-center">Página não encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;