import styled from 'styled-components';
function SideBar({ mostrar }) {
  return (
    <SidebarContainer>
      <button className='sidebar_btn' onClick={mostrar}>
        <span>
          <svg width='35' height='36' viewBox='0 0 36 36'>
            <path fill='#1a73e8' d='M16 16v14h4V20z'></path>
            <path fill='#f40b80' d='M30 16H20l-4 4h14z'></path>
            <path fill='#47a9da' d='M6 16v4h10l4-4z'></path>
            <path fill='#ff6600' d='M20 16V6h-4v14z'></path>
            <path fill='none' d='M0 0h36v36H0z'></path>
          </svg>
        </span>
        Criar contato
      </button>
    </SidebarContainer>
  );
}
export default SideBar;

const SidebarContainer = styled.div`
  width: 280px;
  background-color: #fff;
  min-height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  button {
    background-color: #fff;
    color: #1a73e8;
    height: 48px;
    border-radius: 24px;
    font-family: Roboto;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.0178571429em;
    padding: 2px 24px 2px 24px;
    text-transform: none;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
    border: none;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #f6fafe;
      box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
        0 4px 8px 3px rgb(60 64 67 / 15%);
    }
  }
`;
