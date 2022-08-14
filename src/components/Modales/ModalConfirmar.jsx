import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function ModalConfirmar({ handleClick }) {
  return (
    <>
      <ModalOverlayContainer>
        <ModalConfirlmarContainer>
          <ModalConfirmarHeader>
            <h3>Retirar o contato?</h3>
          </ModalConfirmarHeader>
          <CloseConfirmarButton>
            <FontAwesomeIcon icon={faClose} onClick={handleClick} />
          </CloseConfirmarButton>
          <button className='confirmBtn'>Confirmar</button>
          <button className='cancelBtn'>Cancelar</button>
        </ModalConfirlmarContainer>
      </ModalOverlayContainer>
    </>
  );
}

export default ModalConfirmar;

const ModalOverlayContainer = styled.div`
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

  .confirmBtn {
    margin-right: 1rem;
    font-size: 0.875rem;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: none;
    border: 2px solid #1a73e8;
    color: #1a73e8;
    border-radius: 5px;
    height: 36px;
    padding: 0 12px;
    cursor: pointer;
  }

  .cancelBtn {
    font-size: 0.875rem;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: none;
    background-color: #1a73e8;
    color: #fff;
    border-radius: 5px;
    height: 36px;
    padding: 0 12px;
    border: none;
    cursor: pointer;
  }
`;

const ModalConfirlmarContainer = styled.div`
  min-width: 600px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const ModalConfirmarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
`;

const CloseConfirmarButton = styled.div`
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
