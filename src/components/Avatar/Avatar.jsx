import styled from 'styled-components';
function Avatar() {
  return (
      <AvatarContainer>
        <AvatarContent>
          <img
            src='src\assets\avatar-hc.jpg'
            alt='HC'
          />
        </AvatarContent>
      </AvatarContainer>
  );
}
export default Avatar; 

const AvatarContainer = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  margin: auto;
`;

const AvatarContent = styled.span`
  font-size: 50px;
  background-color: #1a73e8;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #4693f6;

  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px #1a73e8;
    box-shadow: 0px 2px 25px 2px #1a73e8;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;