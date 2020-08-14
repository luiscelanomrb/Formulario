import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Form,FormGroup,FormLabel,Col, Row} from 'react-bootstrap';



class App extends Component{
  render(){
    return (
    <div className="layout">
        <form>
        <h2 className="text">Datos de Factura</h2>

      {/* Pedimos el Nombre */}
        <Form.Row> 
        <Form.Group as={Col} md="" controlId="FirtsName">
        <Form.Label>Nombre</Form.Label>
         <Form.Control type="text" placeholder="Diego" />
       </Form.Group>
       
       {/* Pedimos el Apellido */}
        <Form.Group as={Col} md="" controlId="Last Name">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Samayoa" />
         </Form.Group>
      </Form.Row>
         
         {/* Correo  */}
         <Form.Row>
          <Form.Group as={Col} md="" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="name@example.com"></Form.Control>
          </Form.Group>
        </Form.Row>
        
      <input type="radio"></input> Tu Pedido es un regalo?
        {/* <input type="radio"><p>¿Su pedido es Regalo?</p></input> */}
        <Form.Row> 
          <Form.Group as={Col} md="" controlId="De">
          <Form.Label>De:</Form.Label>
          <Form.Control type="text" placeholder="Jose" />
        </Form.Group>
       
       
        <Form.Group as={Col} md="" controlId="">
          <Form.Label>Para:</Form.Label>
          <Form.Control type="text" placeholder="Ester"/>
          </Form.Group> 
        </Form.Row>
        <Form.Group controlId="mensaje">
        <Form.Label placeholder="MENSAJE PARA EL/ELLA...">NOTA DE MENSAJE</Form.Label>
        <Form.Control as="textarea" rows="3" />
        </Form.Group> 


      <h2 className="text">Datos de Envio</h2>  
     
          {/*NIT  */}
          <Form.Row>
          <Form.Group as={Col} md="" controlId="Nit">
          <Form.Label>NIT</Form.Label>
          <Form.Control type="text" placeholder="10269782-2"></Form.Control>
          </Form.Group>
        </Form.Row>

        
          {/* Direccion1 */}
          <Form.Row>
          <Form.Group as={Col} md="" controlId="DirectionOne">
          <Form.Label>Dirección 1</Form.Label>
          <Form.Control type="text" placeholder="17 ave 6-36 Edificio Lindora Lofts, lofts 601"></Form.Control>
          </Form.Group>
        </Form.Row>
        {/* Direccion2 */}
        <Form.Row>
          <Form.Group as={Col} md="" controlId="DirectionTwo">
          <Form.Label>Dirección 2</Form.Label>
          <Form.Control type="text" placeholder="Habitación, Apartamento, etc.(opcional)"></Form.Control>
          </Form.Group>
        </Form.Row>
        
        {/* select Departament */}
        <Form.Row>
          <Form.Group as={Col}  md="" controlId="Depatament">
          <Form.Label>Departamento</Form.Label>
          <Form.Control as="select" defaultValue="Departamento">
          <option>Elige...</option>
          </Form.Control>
        </Form.Group>

        
        {/* select Municipality */}
        <Form.Group as={Col} md="" controlId="Municipality">
          <Form.Label>Municipio</Form.Label>
          <Form.Control as="select" defaultValue="Municipality">
          <option>Elige...</option>
          </Form.Control>
        </Form.Group>
       
       {/* select zone */}
        <Form.Group as={Col} md=""controlId="zone">
          <Form.Label>Zona</Form.Label>
          <Form.Control as="select" defaultValue="zone...">
          <option>Elige...</option>
          </Form.Control>
          </Form.Group>
         </Form.Row> 
         {/* {Ingreso de Telefono 1,2,3 } */}
        <Form.Row> 
          <Form.Group as={Col} md="" controlId="Tel1">
          <Form.Label>Telefono1</Form.Label>
          <Form.Control type="text" placeholder="32064934" />
        </Form.Group>
       
       
        <Form.Group as={Col} md="" controlId="Tel2">
          <Form.Label>Telefono2</Form.Label>
          <Form.Control type="text" placeholder="opcional..." />
        </Form.Group>

        
        <Form.Group as={Col} md="" controlId="Tel3">
          <Form.Label>Telefono3</Form.Label>
          <Form.Control type="text" placeholder="opcional..." />
          </Form.Group> 
        </Form.Row>

      


        <Button  variant="primary" size="lg" md="4" block>Enviar Datos</Button>
     
        
        
            
      </form>
    </div>
    );
  }  

}
export default App;