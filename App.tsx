import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import Gallery from './components/Gallery';
import MapSection from './components/MapSection';
import Events from './components/Events';
import Facilities from './components/Facilities';
import News from './components/News';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <CategoryNav />
        <Gallery />
        <Facilities />
        <MapSection />
        <Events />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default App;