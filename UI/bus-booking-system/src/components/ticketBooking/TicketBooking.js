import CardHeader from "react-bootstrap/esm/CardHeader";
import Card from 'react-bootstrap/Card';
import Header from './../header/Header';
import {useNavigate} from 'react-router-dom';
import './ticketBooking.css';
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Row,Col} from "react-bootstrap";
import {React,useState} from 'react';
import {useLocation} from 'react-router-dom';
import Ticket from "../../model/Ticket.js";

function TicketBooking(){
  let ticket;
  const location = useLocation();
  const bus = location.state.key;
  const navigate = useNavigate();
  function moveToConfirmation (ticket_id)  {
    navigate('/confirmation/'+ticket_id,{state:ticket});
  }
  const [enteredFirstName,setFirstName] = useState('');
  const [enteredLastName,setLastName] = useState('');
  const [enteredMailAddress,setMailAddress] = useState('');
  const [enteredPhone,setPhone] = useState('');
  const [enteredSeat,setSeat] = useState('');

  const changeFirstName = (event) =>{
    setFirstName(event.target.value);
  }
  const changeLastName = (event) =>{
    setLastName(event.target.value);
  }
  const changeMail = (event) =>{
    setMailAddress(event.target.value);
  }
  const changePhone = (event) =>{
    setPhone(event.target.value);
  }
  const changeSeat = (event) =>{
    setSeat(event.target.value);
  }

  const createTicket = () => {

    ticket = new Ticket(enteredFirstName,enteredLastName,bus.bus_id,enteredMailAddress,enteredPhone,enteredSeat);
    console.log("Inside create Ticket");
    console.log(JSON.stringify(ticket));
    let ticketnum;
    fetch('http://localhost:3001/bookTicket',{      
      body: JSON.stringify({"key":"ticket"}),
      method:'POST'           
    }).then((response)=>{return response.json()}).then((data)=>{
      console.log(data.ticket_id);
      ticketnum = data.ticket_id;
    }).then(() => {
      moveToConfirmation(ticketnum)});
  }

    return(
        <div>
        <Header></Header>
        <Card style={{ width: '18cm', margin: 'auto' }} >
            <Card.Header class="card-header">
                PASSENGER DETAILS   
            </Card.Header>  
            <Card.Body>                
                <div>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="input" placeholder="First Name" onChange={changeFirstName}/>
                      </Form.Group>
                    </Col>   
                      <Col>
                        <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="input" placeholder="Last Name" onChange={changeLastName}/>
                        </Form.Group>
                      </Col>    
                                   
                  </Row>
                  <br/> 
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={changeMail} />        
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="seat">
                        <Form.Label>Seat number</Form.Label>
                        <Form.Control type="text" placeholder="Seat" onChange={changeSeat}/>        
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="contact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="text" placeholder="Contact" onChange={changePhone} />
                  </Form.Group>
                  
      <Button variant="primary" type="submit"  onClick={createTicket}>
        Submit
      </Button>
    </Form>
                </div>
            </Card.Body>           
        </Card>  
        </div>
    )
}

export default TicketBooking;