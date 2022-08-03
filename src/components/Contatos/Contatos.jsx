import './Contatos.css';

function Contatos({ nome, email, telefone }) {
  return (
    <>
      <div className='contatos_container'>
        <div className='contatos_items_container'>
          <div className='contatos_items item_nombre'>{nome}</div>
          <div className='contatos_items item_email'>{email}</div>
          <div className='contatos_items item_tel'>{telefone}</div>
        </div>
      </div>
    </>
  );
}

export default Contatos;
