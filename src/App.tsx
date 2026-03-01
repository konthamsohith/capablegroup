import Navbar from './components/Navbar';
import Home from './pages/Home';
import SmoothScrolling from './components/SmoothScrolling';

function App() {
  return (
    <SmoothScrolling>
      <Navbar />
      <Home />
    </SmoothScrolling>
  );
}

export default App;
