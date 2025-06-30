import Navbar from './navbar.jsx';
import Intro from './Intro.jsx';
import Modules from './modules.jsx';
import Cards from './cards.jsx';
import Footer from './footer.jsx';
import { useEffect, useState } from "react";
import './App.css'


function App() {
  const [loading, setLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setFadeClass('fade-in');
    }, 250);
  }, []);

  if (loading) {
    return (
      <div className='loadingtext'>    
        <div>
          Welcome to <span style={{color:'rgb(0, 67, 128)'}}>MLSA</span>&nbsp;<span style={{color:'rgb(63, 126, 175)'}}>MIET</span> | Activity Zone ...
        </div>
        <div className='loader'></div>
      </div>
    );
  }

  return (
    <div className={fadeClass}>
      <Navbar />
      <Intro />
      <Modules />
      <Cards />
      <hr></hr>
      <Footer />
    </div>
  )
}

export default App
