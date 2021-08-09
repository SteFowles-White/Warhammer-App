import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';


ReactDOM.render(

  <React.StrictMode>
    <React.Fragment>
      <Header />
      <App />
      <Footer />
    </React.Fragment>
  </React.StrictMode>,

  
  document.getElementById('root')
);