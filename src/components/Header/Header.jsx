import Avatar from '../Avatar/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useState } from 'react';


function Header({ search, handleSearch }) {
  const [sideBar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sideBar);

  return (
    <>
      <nav className='navbar'>
        <div className='nav_container'>
          <div className='navegacao'>
            <div className='nav_container_menu' onClick={showSidebar}>
              <FontAwesomeIcon
                icon={faBars}
                className='nav_bars'
                onClick={showSidebar}
              />
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
              placeholder='Buscar contato...'
              // value={search}
              onChange={handleSearch}
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
    </>
  );
}
export default Header;
