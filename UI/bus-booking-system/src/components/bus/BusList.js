import { useState } from 'react';
import React from 'react';
import { useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './busList.css';

function BusList(props){
    const navigate = useNavigate();
  const moveToTicketBooking = () => {
    console.log(props.bus);
    navigate('/ticketBooking',{state:{key:props.bus}});
  }
        return (
            <div>
                <Card shadow={4} style={{ width: '10cm', margin: 'auto' }}>
                    <Card.Header>
                        {props.bus.bus_name}
                    </Card.Header>
                    <Card.Body class='card-body'>
                    <Card.Text>
                        Start Location       : {props.bus.bus_from}<br/>
                        Destination Location : {props.bus.bus_to}<br/>
                        Journey Date         : {props.bus.bus_date}<br/>
                        Arrival Time         : {props.bus.bus_timing}<br/>
                        Seats available      : {props.bus.seat_availablity}<br/>
                    </Card.Text>
                        <Button colored onClick={moveToTicketBooking} busVal={props.bus}>Book Ticket</Button>                  
                    </Card.Body>
                </Card>
                <br/>
            </div>
        )
        
    
}

export default BusList;