import React from 'react';
import Link from 'next/link';
const  Encomenda = () => {
    return ( <>  <header className='header'>
    <div className='logo'>
        <img src='/images/logo.png'></img>
    </div>
    <Link href='/' ><a className='inicio'>INíCIO</a></Link>
    <Link href='/Encomenda' ><a className='encomenda-logo'>ENCOMENDAS</a></Link>
    <Link href='https://www.youtube.com' ><a className='peca-pronta-entrega'>PEÇAS PRONTA ENTREGA</a></Link>

    
    </header>
      
</> );
}
 
export default Encomenda;