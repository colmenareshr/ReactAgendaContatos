import Avatar from '../Avatar/Avatar';
import styled from 'styled-components';


function Header({ handleSearch }) {
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
  max-width: 100vw;
  margin: 2rem 0;
  padding: 0 1rem;
  border-bottom: 1px solid #f1f3f4;
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


const MenuTitle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
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
