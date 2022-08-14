import styled from 'styled-components';
import Contacts from '../Contacts/Contacts';

export default function ContactList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Correio eletrônico</th>
          <th>Número de telefone </th>
        </tr>
      </thead>
      <div className='contatos_title'>
        Contatos
        <span></span>
      </div>
      <tbody>
        <Contacts
          key={id}
          nome={nome}
          email={email}
          telefone={telefone}
        />
      </tbody>
    </table>
  );
}
