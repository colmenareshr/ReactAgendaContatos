import './Avatar.css';

function Avatar() {
  return (
      <div className='avatar'>
        <span className='avatar__conteudo'>
          <img
            src='src\assets\avatar-hc.jpg'
            alt='HC'
            className='avatar__imagen'
          />
        </span>
      </div>
  );
}
export default Avatar; 