import React from 'react';
import Link from 'next/link';
const  Encomenda = () => {
    return ( <>   
    

    
    <body>
    <div className='logo'>
        <img src='/images/logo.png'></img>
    </div>
    <Link href='/' ><a className='inicio'>HOME</a></Link>
    <Link href='/Encomenda' ><a className='encomenda-logo'>ENCOMENDAS</a></Link>
    <Link href='/ProntaEntrega' ><a className='peca-pronta-entrega'>PEÇAS PRONTA ENTREGA</a></Link>
    <Link href='https://wa.me/5535997669761?text=Ol%C3%A1%20Hilda%F0%9F%98%81%20Tenho%20interesse%20em%20seus%20produtos!' ><img className='whatsapp' src='/images/whatsapp.png'></img></Link>
        <div className='title'>
        <h2>
            PEÇAS PRONTA ENTREGA
        </h2>
        </div>
    </body>
      
    </>
     );
}
 
export default Encomenda;