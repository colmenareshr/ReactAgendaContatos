import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function ContatosForm() {
  const [date, seDate] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleInputChange = (ev) => {
    // console.log(ev.target.value);
    seDate({
      ...date,
      [ev.target.name] : ev.target.value
    })
  };
  const enviarDado = (ev) =>{
    ev.preventDefault();
    console.log (date.nome + ' ' + date.email + ' ' + date.telefone)

  };
  return (
    <>
      <div className='contatos_container'>
        <div className='contatos_cancel'>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <form onSubmit={enviarDado}>
          <div className='contact_label input_nome'>
            <input
              type='text'
              placeholder='Ingrese Nome'
              name='nome'
              onChange={handleInputChange}
            />
          </div>
          <div className='contact_label input_email'>
            <input
              type='text'
              placeholder='Ingrese seu email'
              name='email'
              onChange={handleInputChange}
            />
          </div>
          <div className='contact_label input_telefone'>
            <input
              type='number'
              placeholder='Ingrese seu telefone'
              name='telefone'
              onChange={handleInputChange}
            />
          </div>
          <div className='btn_form'>
            <button>Agregar contato</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ContatosForm;
