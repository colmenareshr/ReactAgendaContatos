import Avatar from '../Avatar/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <nav className='navbar'>
      <div className='nav_container'>
        <div className='navegacao'>
          <div className='nav_container_menu'>
            <FontAwesomeIcon icon={faBars} className='nav_bars' />
          </div>
          <div className='menu_user'>
            <img src='src\assets\contato-icon.png' alt='Contatos' />
            <span className='menu_title'>Contatos</span>
          </div>
        </div>
        <div className='nav_search'>
          <input
            type='search'
            name='searh'
            id='search'
            placeholder='Buscar contato... '
          />
          <button className='btn_search'>
            <FontAwesomeIcon icon={faSearch} className='search' />
          </button>
        </div>
        <div className='nav_avatar'>
          <Avatar />
        </div>
      </div>
    </nav>
  );
}
export default Header;
