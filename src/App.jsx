import Header from './components/Header/Header';
import Contatos from './components/Contatos/Contatos';
import SideBar from './components/SideBar/SideBar';
import ModalCreate from './components/Modales/ModalCreate';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  /* HOOKS */
  const [contacts, setContacts] = useState([]);
  const [nomes, setNomes] = useState('');
  const [emails, setEmails] = useState('');
  const [telefones, setTelefones] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState();
  const [search, setSearch] = useState('');
  const [actualizar, setActualizar] = useState();

  //FIN HOOKS

  /*AGREGAR VENTANA MODAL CREAR*/
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  /*FIN VENTANA */

  /* API INICIO | MÉTODO GET */
  useEffect(() => {
    fetch('http://localhost:3000/contatos')
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts((contacts) => [data, ...contacts]);
        setNomes('');
        setEmails('');
        setTelefones('');
      })
      .catch((err) => {
        console.log(err.message);
      });
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
    e.target.reset();
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
        console.log('RESPUESTA UPDATE', data);
      });
  };

  const handleUpdate = async (e) => {
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
    if (response.ok) {
      console.log('OKS', response.ok);
      e.preventDefault();
      setActualizar(true);
      setIsUpdate(undefined);
      setShowModal(false);
    }
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
      <Header search={search} handleSearch={handleSearch} />

      <main className='main'>
        <div className='sidebar_wraper'>
          <SideBar mostrar={handleShowModal} />
        </div>
        <div className='main_container-wraper'>
          <div className='container_titles'>
            <div className='cont_name main_elements'>Nombre</div>
            <div className='cont_email main_elements'>Correo electrónico</div>
            <div className='cont_tel main_elements'>Número de teléfono</div>
            <div className='cont_fechar main_elements'></div>
          </div>
          <div className='contatos_title'>
            Contatos
            <span>({results.length})</span>
          </div>
          <div className='contatos_wraper'>
            {results.map(function (contato) {
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
        </div>
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
      </main>
    </div>
  );
}

export default App;
