import Header from './components/Header/Header';
import Contatos from './components/Contatos/Contatos';
import SideBar from './components/SideBar/SideBar';
import ModalCreate from './components/Modales/ModalCreate';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function App() {
  /* HOOKS */
  const [contacts, setContacts] = useState([]);
  const [nomes, setNomes] = useState('');
  const [emails, setEmails] = useState('');
  const [telefones, setTelefones] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState();
  const [search, setSearch] = useState('');

  //FIN HOOKS

  /*AGREGAR VENTANA MODAL CREAR*/
  const handleShowModal = () => {
    setShowModal(!showModal);
    setNomes('');
    setEmails('');
    setTelefones('');
    onUpdate('');
  };
  /*FIN VENTANA */

  /* API INICIO | MÉTODO GET */
  function fetchContacts() {
    fetch('http://localhost:3000/contatos')
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  // FIN GET

  /*MÉTODO POST | AGREGAR CONTACTO */
  const addContacts = async (nomes, emails, telefones) => {
    await fetch('http://localhost:3000/contatos', {
      method: 'POST',
      body: JSON.stringify({
        nome: nomes,
        email: emails,
        telefone: telefones,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    setNomes('');
    setEmails('');
    setTelefones('');
    fetchContacts();
  };
  // FIN POST

  /*METODO DELETE | ELIMINAR CONTACTO */
  const deleteContact = async (id) => {
    await fetch(`http://localhost:3000/contatos/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.status === 200) {
        setContacts(
          contacts.filter((contato) => {
            return contato.id !== id;
          })
        );

      } else {
        return;
      }
    });
  };

  /* FIN DELETE  */

  /* FUNCIONAMIENTO DEL FORMULARIO */
  const handleSubmit = (e) => {
    e.preventDefault();
    addContacts(nomes, emails, telefones);
    console.log('Contacto Agregado');
    setShowModal(false);
  };
  /* FORMULARIO FIN */

  /*EDITAR CONTACTOS*/
  const onUpdate = (id) => {
    fetch(`http://localhost:3000/contatos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setIsUpdate(id);
        setNomes(data.nome);
        setEmails(data.email);
        setTelefones(data.telefone);
        setShowModal(true);
        console.log('Atualizar');
      });
  };

  const updateContacts = async () => {
    await fetch(`http://localhost:3000/contatos/${isUpdate}`, {
      method: 'PATCH',
      body: JSON.stringify({
        nome: nomes,
        email: emails,
        telefone: telefones,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    setIsUpdate(undefined);
    setNomes('');
    setEmails('');
    setTelefones('');
    fetchContacts();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateContacts();
    console.log('Contato editado');
    setShowModal(false);
  };
  // FIN EDITAR CONTACTOS

  //BUSCADOR
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let results = !search
    ? contacts
    : contacts.filter((data) =>
        data.nome.toLowerCase().includes(search.toLocaleLowerCase())
      );
  //FIN BUSCADOR

  return (
    <div className='App'>
      <Header handleSearch={handleSearch} />

      <MainContainer>
        <div>
          <SideBar mostrar={handleShowModal} />
        </div>
        <MainContainerTable>
          <TableHeader>
            <TableItems>Nome</TableItems>
            <TableItems>Correio eletrônico</TableItems>
            <TableItems>Número de telefone</TableItems>
          </TableHeader>
          <ContactsCounter>
            Contatos
            <span>({results.length})</span>
          </ContactsCounter>
          <div className='contatos_wraper'>
            {results.map(function (contato) {
              return (
                <Contatos
                  key={contato.id}
                  nome={contato.nome}
                  email={contato.email}
                  telefone={contato.telefone}
                  deleteContact={() => deleteContact(contato.id)}
                  updateContacto={() => onUpdate(contato.id)}
                />
              );
            })}
          </div>
        </MainContainerTable>
        <ModalCreate
          state={showModal}
          changeState={setShowModal}
          contacts={contacts}
          addContacts={setContacts}
          sendForm={handleSubmit}
          nombres={nomes}
          enviarNombres={setNomes}
          emails={emails}
          enviarEmails={setEmails}
          telefones={telefones}
          enviarTelefones={setTelefones}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          handleUpdate={handleUpdate}
        />
      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.main`
  width: 100%;
  max-width: 1400px;
  min-height: 100vh;
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
`;

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
  padding: 0 1.9rem;
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


