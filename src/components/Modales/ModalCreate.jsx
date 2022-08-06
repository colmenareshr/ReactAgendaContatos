import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import ContatosForm from '../ContatosForm/ContatosForm';

function ModalCreate({
  state,
  changeState,
  contacts,
  addContacts,
  submitContacts,
  nombres,
  enviarNombres,
  emails,
  enviarEmails,
  telefones,
  enviarTelefones,
  sendForm,
  handleUpdate,
  isUpdate,
  setIsUpdate
}) {
  return (
    <>
      {state && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <h3>Crear novo contato</h3>
            </ModalHeader>
            <CloseButton>
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => changeState(!state)}
              />
            </CloseButton>
            <ContatosForm
              contactos={contacts}
              agregaContactos={addContacts}
              enviarContactos={submitContacts}
              nome={nombres}
              sendNome={enviarNombres}
              email={emails}
              sendEmail={enviarEmails}
              telefone={telefones}
              sendTelefone={enviarTelefones}
              enviarFormulario={sendForm}
              handleUpdate={handleUpdate}
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
            />
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}

export default ModalCreate;

const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  min-width: 600px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #f2f2f2;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  color: #181818;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #e8e8e8;
    color: #1a73e8;
  }
`;
