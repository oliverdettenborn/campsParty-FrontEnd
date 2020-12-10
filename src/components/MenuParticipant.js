import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiPencil } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { IoIosExit } from 'react-icons/io'
import { GrMenu } from 'react-icons/gr'
import { BlueBox } from '.';
import UserContext from '../context/UserContext';
import { media } from '../assets/query';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function MenuParticipant({ togleMenu,setTogleMenu}) {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  
  function handleLogout(){
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/users/sign-out`, null, {headers: {"Authorization": `Bearer ${user.token}`}})
      .then(() => {
        setUser({});
        history.push('/login')
      })
      .catch(() => {
        setUser({});
        history.push('/login')
      })
  }

  return (
    <>
      <IconMenu onClick={() => setTogleMenu(true)} togleMenu={togleMenu} />
      <BlueBox togleMenu={togleMenu}>
        <Container>
          <Title> Olá, participante! </Title>
          <LineWhite />
          {
            (!user.completeRegistration === true) &&
            <Menu>
              <Link to='/participante/visualizar-inscricao'>
                <FaEye />
                Visualizar inscrição
              </Link>
              <Link to='/participante/dados'>
                <BiPencil />
                Meus dados
              </Link>
              <Link to='/participante/hospedagem'>
                <BiPencil />
                Acomodação
              </Link>
              <Link to='/participante/atividades'>
                <BiPencil />
                Atividades
              </Link>
            </Menu>
          }
        </Container>
      </BlueBox>
      <Logout onClick={handleLogout}>
        <IoIosExit />
        Sair
      </Logout>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
  position: relative;

  ${media}{
    padding: 5%;
  }
`;
const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 31px;
  color: #EFEFEF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  ${media}{
    font-size: 18px;
  }
`;

const LineWhite = styled.div`
  background: #C4C4C4;
  border: 1px solid #EFEFEF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 0px;
  margin: 0 auto;
  margin-top: 15px;
`;

const Menu = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  color: #EFEFEF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 35px;
  width: 90%;
  height: 200px;

  svg{
    margin-right: 7px;
  }
  a:hover{
    opacity:0.75;
  }

  ${media}{
    font-size: 16px;
    width: 100%;
    margin-right: 5px;
  }
`;

const IconMenu = styled(GrMenu)`
  display: none;
  color: #EFEFEF;
  font-size: 24px;
  stroke: #EFEFEF;
  ${media}{
    display: ${props => props.togleMenu ? "none" : "block"};
    position: fixed;
    top: 10px;
    left: 10px;
  }
`;

const Logout = styled.button`
  border: none;
  background: transparent;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  color: #EFEFEF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 20px;
  left: 5%;

  svg{
    margin-right: 7px;
  }
  ${media}{
    margin-right: 5px;
    font-size: 16px;
  }
`;