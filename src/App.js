import logo from './logo.svg';
import './App.css';
import SertificatePage from './components/sertificate/SertificatePage';
import { BrowserRouter, } from 'react-router-dom';
import AppRouter from './router/router';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <AppRouter />
       </BrowserRouter>
      {/* <SertificatePage/> */}
    </div>
  );
}

export default App;
