import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Contatos from '../Contatos/Contatos';
import Header from '../Header/Header';

export default function ContactList({  }) {
  const [contacts, setContacts] = useState([]);

  function fetchContacts() {
    fetch('http://localhost:3000/contatos')
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchContacts();
    console.log(fetchContacts)
  }, []);


  

  return (
    <>
      <MainContainerTable>
        <TableHeader>
          <TableItems>Nome</TableItems>
          <TableItems>Correio eletrônico</TableItems>
          <TableItems>Número de telefone</TableItems>
        </TableHeader>
        <ContactsCounter>
          Contatos
          <span>({contacts.length})</span>
        </ContactsCounter>
        <div className='contatos_wraper'>
          {contacts.map(function (contato) {
            return (
              <Contatos
                key={contato.id}
                nome={contato.nome}
                email={contato.email}
                telefone={contato.telefone}
                deleteContacts={() => deleteContact(contato.id)}
                updateContacto={() => onUpdate(contato.id)}
              />
            );
          })}
        </div>
      </MainContainerTable>
    </>
  );
}

const MainContainerTable = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-direction: column;
  table-layout: fixed;
`;

const ContactsCounter = styled.div`
  letter-spacing: 0.07272727em;
  font-family: Roboto, sans-serif;
  font-size: 0.688rem;
  font-weight: 500;
  line-height: 1rem;
  text-transform: uppercase;
`;

const TableHeader = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: table;
  table-layout: fixed;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const TableItems = styled.div`
  display: table-cell;
  border-collapse: collapse;
  padding: 2rem 0;
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.25rem;
  vertical-align: middle;
`;
