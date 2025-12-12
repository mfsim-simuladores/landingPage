// src/App.jsx

import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom'; // 👈 Importe o Outlet

import FloatingSocials from './components/FloatingSocials';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-mfsim-dark overflow-x-hidden">
      <Helmet>
        <title>MFSim | Simuladores de Voo Profissionais de Alta Performance</title>
        <meta name="description" content="Eleve sua experiência de voo a um novo patamar com os simuladores da MFSim. Realismo, precisão e tecnologia de ponta para pilotos e entusiastas." />
        <meta property="og:title" content="MFSim | Simuladores de Voo Profissionais de Alta Performance" />
        <meta property="og:description" content="Eleve sua experiência de voo a um novo patamar com os simuladores da MFSim. Realismo, precisão e tecnologia de ponta para pilotos e entusiastas." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <FloatingSocials />
      <main>
        {/* 👈 O conteúdo da página (HomePage, ProductsPage, etc.) será renderizado aqui */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;