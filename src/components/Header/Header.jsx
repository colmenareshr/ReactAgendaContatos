import Avatar from '../Avatar/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styled from 'styled-components';

function Header({ search, handleSearch }) {
  const [sideBar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sideBar);

  let iconSearch = <FontAwesomeIcon icon={faSearch} />

  return (
    <HeaderContainer>
      <NavContainer>
        <NavTitle>
          <h1 className='menu_title'>Contatos</h1>
        </NavTitle>
        <NavSearch>
          <input
            type='search'
            name='searh'
            id='search'
            placeholder= 'Procurar contato... '
             value={search}
            onChange={handleSearch}
          />
        </NavSearch>
        <div className='nav_avatar'>
          <Avatar />
        </div>
      </NavContainer>
    </HeaderContainer>
  );
}
export default Header;

const HeaderContainer = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const NavContainer = styled.nav`
  display: flex;
  gap: 5rem;
  justify-content: space-between;
`;
const NavTitle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  padding: 0.8rem;
  border-radius: 50%;
`;


const NavSearch = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    height: 3.1rem;
    width: 50rem;
    border: none;
    border-radius: 4rem;
    background-color: #f1f3f4;
    padding: 1rem;
    font-family: Roboto;
    font-size: 1rem;
    outline: none;

    &:focus {
      outline: none;
      box-shadow: 0 1px 25px rgb(143 170 141 / 35%);
      border: 1px solid #1a73e8;
    }
  }
`;
