import React, { useState } from 'react';
import {Container, Row, Col } from 'reactstrap';
import HeaderDashboard from './HeaderDashboard';
import MyPostList from './posts/MyPostList';
import PostList from './posts/PostList';

export default function Home(props){
  const [show, setShow] = useState(<PostList />); //Esta VARIABLE DE ESTADO va a ser un componente PostList
 
  const handleLogout = () => {
    sessionStorage.clear(); //Limpiamos la sesion que se habia creado
    props.history.push("/"); //Le redigirimos a la pagina principal gracias a la "History"
  }

  const handleOnShow = (option) => {
    //Dependiendo del valor que llegue lo que vamos a cambiar es la VARIABLE DE ESTADO
    if (option === 1){
      setShow(<PostList />);
    }else if (option === 2){
      setShow(<MyPostList />);
    }
  }

  //Esto es la forma de chequear que se ha creado la sesión (que solo estará si se ha hecho bien el login)
  if (sessionStorage.getItem("name") === null){ 
    props.history.push("/");
  }
  else{
    return ( //Esto va a ser lo que vamos a enseñar, donde vamos a poner un componente HeaderDashboard que hemos creado
      <Container>
        <Row>
          <Col><HeaderDashboard onLogout={handleLogout} onShow= {handleOnShow} /></Col>
        </Row>
        <Row>
          <Col xs="12">
              {show}
            </Col>
        </Row>
      </Container>
    );
    }
}