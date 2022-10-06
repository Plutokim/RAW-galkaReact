import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Catalog from './pages/Catalog';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound/>} />
    <Route path="catalog" element={<Catalog/>}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;