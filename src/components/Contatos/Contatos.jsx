import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './Contatos.css';

function Contatos({ nome, email, telefone, deleteContacts, updateContacto }) {
  return (
    <>
      <div className='contatos_container'>
        <div className='contatos_items_container' onClick={updateContacto}>
          <div className='contatos_items item_nombre'>{nome}</div>
          <div className='contatos_items item_email'>{email}</div>
          <div className='contatos_items item_tel'>{telefone}</div>
          <FontAwesomeIcon icon={faClose} onClick={deleteContacts} />
        </div>
      </div>
    </>
  );
}

export default Contatos;
