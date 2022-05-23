import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";

import Header from "./components/Header"
import Footer from './components/Footer';

// Pages
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Header />

      <Home />

      <Footer />
    </>
  );
}

export default App;
