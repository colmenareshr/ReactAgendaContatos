import Header from './components/Header/Header';
import Contatos from './components/Contatos/Contatos';
import './App.css';
import dados from './db.json';

function App() {
  const AGENDA = dados.contatos;

  return (
    <div className='App'>
      <header className='header header_wrap'>
        <Header />
      </header>
      <main className='main'>
        <div className='main_container'>
          <div className='container_elements'>
            <div className='cont_name main_elements'>Nombre</div>
            <div className='cont_email main_elements'>Correo electrónico</div>
            <div className='cont_tel main_elements'>Número de teléfono</div>
          </div>
        </div>
        <div className='contatos_wrap'>
          <div className='contatos_title'>
            Contatos
            <span>(13)</span>
          </div>
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
      </main>
    </div>
  );
}

export default App;
