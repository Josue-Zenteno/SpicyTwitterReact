import React, { useState, useEffect } from 'react';
//imports from React-Strap
import { Row, Col, Card, CardTitle, Badge, CardBody, Table, Alert } from 'reactstrap';
import '../../styles.css';
//imports from React-Icons
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { BsChat, BsUpload } from "react-icons/bs";
//import from internal files
import { getAllPosts } from "../../utils/apicalls.js";
import { getDateInStrFormat } from "../../utils/utils.js";

export default function PostList(){
  //Esta va a ser la VARIABLE DE ESTADO posts
  //al principio va a ser una array vacia pero luego cuando nos devuelvan las cosas va a ser un array de posts
  const [posts, setPosts] = useState([]); 

  //con esto llamamos a getAllPosts
  const getPosts = () => {
    getAllPosts().then((posts) => { //aquí la variable posts tiene lo que retorna la funcion
      setPosts(posts); //eso que devolvió lo vamos a poner como nuevo valor de la VARIABLE DE ESTADO posts
    });
  }

  //para usar los efectos
  useEffect(() =>{
    getPosts(); //esto es lo que va a hacer
  },[]);

  return (
    <div>
      <CardTitle tag="center"><Alert color="primary"><strong>Posts publicados </strong><Badge pill>{posts.length}</Badge></Alert></CardTitle>
      <Table>
        <tbody>
          { posts.map((post, index) => { //con .map se hace un for y le decimos que queremos sacar, en este caso sería con un for each
            return( //el return es una subvista para cada uno de los posts que hay (la tabla tiene vistas)
            //gracias a que tenemos claro lo que tiene un post (por el modelo que creamos en la API, podemos llamar a esos atributos post.user, post.image ...)
              <div> 
                  <Row>
                    <Col>
                      <Card>
                        <CardBody>
                          <Row><Col><strong><img src={post.image} alt="Img"/> {post.user}</strong></Col></Row>
                          <Row>
                            <Col>
                              {post.message}
                            </Col>
                          </Row>
                          <Row>
                            <Col align="left" xs= "5">
                              <Row>
                                <Col xs="2"><BsChat /></Col>
                                <Col xs="2"><AiOutlineRetweet /><small>{Math.floor((Math.random() * 10) + 1)}</small></Col>
                                <Col xs="2"><AiOutlineHeart /><small>{Math.floor((Math.random() * 100) + 1)}</small></Col>
                                <Col xs="2"><BsUpload/></Col>
                              </Row>
                            </Col>
                            <Col align="right">
                              <small>{getDateInStrFormat(new Date(post.publicationdate))}</small>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <br/>
              </div>)
            })}
          </tbody>
        </Table>
      </div>
    );

}