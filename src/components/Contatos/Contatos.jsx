import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './Contatos.css';
import styled from 'styled-components';

function Contatos({ nome, email, telefone, deleteContacts, updateContacto }) {
  return (
    <>
      <ContactsContainers>
        <ContactsItemsContainer onClick={updateContacto}>
          <ContactsItems>{nome}</ContactsItems>
          <ContactsItems>{email}</ContactsItems>
          <ContactsItems>{telefone}</ContactsItems>
        </ContactsItemsContainer>
        <div>
          <FontAwesomeIcon className='IconClose' icon={faClose} onClick={deleteContacts} />
        </div>
      </ContactsContainers>
    </>
  );
}

export default Contatos;

const ContactsContainers = styled.div`
  width: 100%;
  max-width: fit-content;
  background-image: linear-gradient(#fff, 57px, #fafafa, 57px);
  display: flex;
  align-items: center;

  .IconClose {
    width: 25px;
    height: 25px;
    background-color: #fafafa;
    border-radius: 50px;
    color: #181818;

    &:hover{
      background-color: #fa0404;
      color: #fff;
      width: 25px;
      height: 25px;
    }
  }
`;
const ContactsItemsContainer = styled.div`
  width: 100%;
  display: table;
  table-layout: fixed;
  position: relative;

  &:hover {
    background-color: #e7eeff;
    background-size: 100% 112px;
  }
`;

const ContactsItems = styled.div`
  display: table-cell;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
  border-bottom: 1px solid #f1f3f4;
  padding: 20px;
  cursor: pointer;
`;
