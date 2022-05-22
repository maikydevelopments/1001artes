import logo from './logo.png';
import whatsapp from './whatsapp.png'
import './App.css';
import Link from 'next/link';

function App() {
  return (
    <>
    <header  className='header'>
      <a className="Image"  href='./index.js' >
          <img src={logo} className="App-logo" alt="logo"/>
          <a className='Pronta-Entrega' href='./index.js'>
            <h1>PEÇAS PRONTA ENTREGA</h1>

          </a>
          <Link href='/Encomenda'></Link>
          <a className='ENCOMENDA' href='/Encomenda'>
            <h1>ENCOMENDA</h1>
          </a>
          <a className='Whatsapp' href='https://wa.me/5535997669761?text=Ol%C3%A1%20Hilda%F0%9F%98%81%20Tenho%20interesse%20em%20seus%20produtos!'> 
            <img src={whatsapp} className="Whatsapp" alt="logo"/>
          </a>
      </a>
      
    </header>
    <body className='body'>
      <h1>faasf</h1>
    </body>
    </>
  );
}

export default App;
