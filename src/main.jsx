import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import App from './App.jsx';
import { Toaster } from './components/ui/toaster';
import './i18n';
import './index.css';
import ContatoPage from './pages/ContactPage.jsx';
import CustomizadosPage from './pages/CustomizadosPage.jsx';
import HomePage from './pages/HomePage.jsx';
import MediaPage from './pages/MediaPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import SimulatorsPage from './pages/SimulatorsPage.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          {/* A rota principal ("/") renderiza o componente App como um layout base */}
          <Route path="/" element={<App />}>
            {/* A rota index (Home) será renderizada dentro do <Outlet /> do App */}
            <Route index element={<HomePage />} />
            {/* As rotas para as outras páginas também serão renderizadas no <Outlet /> */}
            <Route path="produtos" element={<ProductsPage />} />
            <Route path="produtos/:productId" element={<ProductDetailPage />} />
            <Route path="simulador-homologado-aatd" element={<SimulatorsPage />} />
            {<Route path="midias" element={<MediaPage />} />}
            {/* Adicione outras rotas do seu menu aqui: */}
            {/* <Route path="homologacao" element={<HomologacaoPage />} /> */}
            {<Route path="customizados" element={<CustomizadosPage />} />}
            {/* <Route path="modulos" element={<ModulosPage />} /> */}
            <Route path="contato" element={<ContatoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </HelmetProvider>
  </React.StrictMode>
);