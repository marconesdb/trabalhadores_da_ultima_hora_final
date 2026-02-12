import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Donation from './pages/Donation';
import Campaigns from './pages/Campaigns';
// Importe as outras páginas aqui conforme for criando
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="doacoes" element={<Donation />} />
          <Route path="campanhas" element={<Campaigns />} />
          
          {/* Adicione as rotas das outras páginas aqui */}
          {/* <Route path="quem-somos" element={<About />} /> */}
          {/* <Route path="contato" element={<Contact />} /> */}
          
          {/* Rota para 404 (opcional) */}
          <Route path="*" element={<div className="p-20 text-center">Página não encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;