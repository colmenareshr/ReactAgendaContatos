import './SideBar.css';
function SideBar({mostrar}) {
  return (
    <div className='sidebar_container'>
      <div className='sidebar_wraper'>
        <div className='btn_add'>
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
            Crear contacto
          </button>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
