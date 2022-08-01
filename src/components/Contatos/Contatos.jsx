import './Contatos.css';

function Contatos({ nome, email, telefone }) {


   return (
     <>
       <div className='contatos_container'>
         
         <div className='contatos_items_container'>
           <div className='contatos_items'>
             <div className='item_nombre item_celd'>{nome}</div>
             <div className='item_email item_celd'>{email}</div>
             <div className='item_tel item_celd'>{telefone}</div>
           </div>
         </div>
       </div>
     </>
   );
   
}

export default Contatos