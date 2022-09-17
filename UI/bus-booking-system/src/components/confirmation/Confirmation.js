import { React,useState } from "react";
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";
import './confirmation.css';
import Header from "../header/Header";
import './confirmation.css';

function Confirmation(props){
    const location = useLocation();
    let bus = location.state;
    console.log(bus);
    let ticketnum = location.pathname.split('/');
    console.log(ticketnum[2]);
    return(
        <div>
            <Header></Header>
                <Card shadow={4} class='main-card'>
                    <Card.Header>
                        CONFIRMED
                    </Card.Header>
                    <Card.Body class='card-body'>
                        <Card>
                            <Card.Header>Your ticket has been successfully booked!!</Card.Header>
                            <Card.Text>
                                <div class='internal-card'>
                                    <br/>
                                    Ticket number # {ticketnum[2]}<br/>
                                    <br />
                                    <div class='data'>
                                    Name : {bus.firstname} &nbsp; {bus.lastname}<br></br>
                                    Seat : {bus.seat_no}
                                    </div>

                                </div>
                            </Card.Text>
                        </Card>
                    <Card.Text>
                    </Card.Text>
                                         
                    </Card.Body>
                </Card>
                <br/>
            </div>    
    )
}

export default Confirmation;