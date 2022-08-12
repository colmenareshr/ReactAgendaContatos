import Avatar from '../Avatar/Avatar';
import styled from 'styled-components';
function Header({ handleSearch, mostrarSidebar }) {
  return (
    <HeaderContainer>
      <NavContainer>
        <Nav>
          <MenuTitle>
            <img src='src/assets/contacts.png' alt='agenda contatos' />
            <h1>Contatos</h1>
          </MenuTitle>
        </Nav>
        <NavSearch>
          <input
            type='search'
            name='searh'
            id='search'
            placeholder='Procurar contato...'
            onChange={handleSearch}
          />
        </NavSearch>
        <div>
          <Avatar />
        </div>
      </NavContainer>
    </HeaderContainer>
  );
}
export default Header;

const HeaderContainer = styled.header`
  height: 6rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid #f1f3f4;
`;

const NavContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex: 1 1;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const NavMenu = styled.div`
  .nav_bars {
    height: 1.5rem;
    width: 1.5rem;
    padding: 0.8rem;
    border-radius: 50%;

    &:hover {
      height: 1.5rem;
      width: 1.5rem;
      padding: 0.8rem;
      background-color: #ebecec;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
const MenuTitle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  h1 {
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
  }
`;
const NavSearch = styled.div`
  width: 40rem;
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
