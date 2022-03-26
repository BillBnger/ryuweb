import './App.css';
import Faqs from './components/faqs/Faqs';
import Nav from './components/navigation/Nav';
import HeroSection from './components/pagesections/HeroSection';

function App() {
  return (
    <div className='App'>
      <Nav />
      <HeroSection />
      <Faqs />
    </div>
  );
}

export default App;
