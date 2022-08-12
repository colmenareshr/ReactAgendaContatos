import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function Contatos({ nome, email, telefone, deleteContacts, updateContacto }) {
  return (
    <>
      <ContactsContainer>
        <ContactsItemsContainer onClick={updateContacto}>
          <ContactsItems>{nome}</ContactsItems>
          <ContactsItems>{email}</ContactsItems>
          <ContactsItems>{telefone}</ContactsItems>
        </ContactsItemsContainer>
        <IconDeleteContainer>
          <FontAwesomeIcon icon={faClose} onClick={deleteContacts} />
        </IconDeleteContainer>
      </ContactsContainer>
    </>
  );
}

export default Contatos;

const ContactsContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const IconDeleteContainer = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;

  &:hover{
    background-color: red;
    color: #fff;

  }
`;

const ContactsItemsContainer = styled.div`
  width: 100%;
  display: table;
  table-layout: fixed;
  &:hover {
    background-color: #e7eeff;
    background-size: 100% 112px;
  }
`;

const ContactsItems = styled.div`
  display: table-cell;
  border-bottom: 1px solid #f1f3f4;
  padding: 25px;
  cursor: pointer;
`;
