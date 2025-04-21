import logo from './logo.svg';
import './App.css';
import Header from './screens/Header';
import { Routes, Route } from "react-router-dom";
import FirstComponent from './screens/FirstComponent';
import SecondComponent from './screens/SecondComponent';
import Footer from './screens/Footer';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
      <Route path='/' element={<FirstComponent />}  />
      <Route path='/second' element={<SecondComponent />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
