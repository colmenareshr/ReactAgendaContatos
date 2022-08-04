import Header from './components/Header/Header';
import Contatos from './components/Contatos/Contatos';
import './App.css';
import dados from '/db.json';
import SideBar from './components/SideBar/SideBar';
import ModalCreate from './components/Modales/ModalCreate';
import { useState } from 'react';

function App() {
  const AGENDA = dados.contatos;

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    console.log('BOTÓN MOSTRADO');
    setShowModal(!showModal);
  };

  return (
    <div className='App'>
      <header className='header header_wrap'>
        <Header />
      </header>
      <main className='main'>
        <div className='sidebar_wraper'>
          <SideBar mostrar={handleShowModal} />
        </div>
        <div className='main_container-wraper'>
          <div className='container_titles'>
            <div className='cont_name main_elements'>Nombre</div>
            <div className='cont_email main_elements'>Correo electrónico</div>
            <div className='cont_tel main_elements'>Número de teléfono</div>
          </div>
          <div className='contatos_title'>
            Contatos
            <span>({AGENDA.length})</span>
          </div>
          <div className='contatos_wraper'>
            {AGENDA.map(function (contato) {
              return (
                <Contatos
                  key={contato.id}
                  nome={contato.nome}
                  email={contato.email}
                  telefone={contato.telefone}
                />
              );
            })}
          </div>
        </div>

        <ModalCreate state={showModal} changeState={setShowModal} />
      </main>
    </div>
  );
}

export default App;
