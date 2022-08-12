import styled from 'styled-components';

function ContatosForm({
  enviarFormulario,
  nome,
  sendNome,
  email,
  sendEmail,
  telefone,
  sendTelefone,
  isUpdate,
  handleUpdate,
}) {
  return (
    <>
      <FormContainer>
        <form onSubmit={isUpdate ? handleUpdate : enviarFormulario}>
          <FormLabels>
            <ContainerInputs>
              <Label htmlFor='nome'>
                <svg width='20' height='20' viewBox='0 0 24 24'>
                  <path d='M0 0h24v24H0V0z' fill='none'></path>
                  <path d='M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z'></path>
                </svg>
              </Label>

              <Input>
                <input
                  type='text'
                  placeholder='Ingrese Nome'
                  name='nome'
                  id='nome'
                  value={nome}
                  onChange={(e) => sendNome(e.target.value)}
                />
              </Input>
            </ContainerInputs>

            <ContainerInputs>
              <Label htmlFor='email'>
                <svg width='20' height='20' viewBox='0 0 24 24'>
                  <path d='M0 0h24v24H0V0z' fill='none'></path>
                  <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z'></path>
                </svg>
              </Label>
              <Input>
                <input
                  type='text'
                  placeholder='Ingrese seu email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => sendEmail(e.target.value)}
                />
              </Input>
            </ContainerInputs>

            <ContainerInputs>
              <Label htmlFor='telefone'>
                <svg width='20' height='20' viewBox='0 0 24 24'>
                  <path fill='none' d='M0 0h24v24H0V0z'></path>
                  <path d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z'></path>
                </svg>
              </Label>
              <Input>
                <input
                  type='number'
                  placeholder='Ingrese seu telefone'
                  name='telefone'
                  id='telefone'
                  value={telefone}
                  onChange={(e) => sendTelefone(e.target.value)}
                />
              </Input>
            </ContainerInputs>
          </FormLabels>
          <Boton>
            <button>{isUpdate ? 'Alterar' : 'Guardar'}</button>
          </Boton>
        </form>
      </FormContainer>
    </>
  );
}
export default ContatosForm;

const FormContainer = styled.div`
  max-width: 100%;
  visibility: visible;
  padding: 5px 85px 25px 25px;
  opacity: 1;
  margin-left: 0;
  background-color: #fff;

  form {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
  }
`;

const FormLabels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContainerInputs = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
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

const Input = styled.div`
  width: 100%;

  input {
    width: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    background-color: transparent;
    border: none;
    display: block;
    height: 24px;
    line-height: 24px;
    margin: 0;
    min-width: 0%;
    outline: none;
    padding: 0;
    z-index: 0;
    border-bottom: 1px solid #ebecec;

    &:focus-visible {
      transition: 0.2s ease-in-out;
      border-bottom: 2px solid #1a73e8;
    }
  }
`;

const Boton = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  padding-bottom: 8px;

  button {
    margin-right: auto;
    font-size: 0.875rem;
    letter-spacing: 0.0107142857em;
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
