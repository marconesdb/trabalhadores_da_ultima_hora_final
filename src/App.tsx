import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

// Importe as outras páginas aqui conforme for criando
// import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="doacoes" element={<Donation />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="campanhas" element={<Campaigns />} />
          <Route path="Galeria" element={<Galeria />} />
          <Route path="contato" element={<Contato />} /> 
          <Route path="nossas-acoes" element={<NossasAções />} />
          <Route path="distribuicao-alimentos" element={<DistribuicaoAlimentos />} />
          <Route path="apoio-hospitalar" element={<ApoioHospitalar />} />
          <Route path="bazar-beneficiente" element={<BazarBeneficiente />} />

          {/* Adicione as rotas das outras páginas aqui */}
          {/* <Route path="quem-somos" element={<About />} /> */}
          
          
          {/* Rota para 404 (opcional) */}
          <Route path="*" element={<div className="p-20 text-center">Página não encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;