import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bus from './../../model/Bus.js';
import BusList from '../bus/BusList.js';

import './searchPanel.css';
import { useState } from 'react';

function SearchPanel(){

    const [enteredFrom,setEnteredFrom] = useState('');
    const [enteredTo,setEnteredTo] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const [fetchBus,setBusList] = useState('');

    let from = "";
    let to = "";
    let date;
    let busList = [];
    function fromText(event){
        setEnteredFrom(event.target.value);
    }
    function toText(event){
        setEnteredTo(event.target.value);
    }
    function dateText(event){
        setEnteredDate(event.target.value);
    }
    function search() {
        console.log("Button clicked!!");
        from = enteredFrom;
        to = enteredTo;
        date = enteredDate;
        console.log("From "+from+" to "+to+" on "+date);
        fetch('http://localhost:3001/bus/'+from+'/'+to+'/'+date).then((response) => {
            console.log("Response : ")
            console.log(response);
            return response.json();
        }).then((data) => {
               for(let bus of data)
               {
                busList.push(new Bus(bus.bus_id,bus.bus_name,bus.bus_from,bus.bus_to,bus.bus_date,bus.bus_timing,bus.seat_availablity))
               }           
               return busList;     
           
        }).then((busList) => {
            if(busList === null || busList.length===0)
            {                
            busList=[];
            setBusList(busList);
            }
            else{           
            console.log(busList);
            setBusList(busList);
            }
        })
    }
    return (
        <div class="main-class">
            <Container fluid>                 
            <div class="search-bar">
                <Row><br /></Row>    
                <Row><br /></Row>
                <Row><br /></Row>           
                <Row>
                    <Col >
                    <Form >
                                <Form.Control
                                type="search"
                                placeholder="From"
                                aria-label="From"
                                onChange={fromText}                                
                                />                                
                    </Form>
                    </Col>
                    <Col>
                    <Form >
                                <Form.Control
                                type="search"
                                placeholder="To"
                                aria-label="To"
                                onChange={toText}
                                />                                                                 
                    </Form>                    
                    </Col>
                    <Col>
                    <Form.Control type="date" placeholder ="Date" onChange={dateText}></Form.Control>
                    </Col>
                    <Col>
                    <Button variant="outline-success" onClick={search}>Search</Button>
                    </Col>
            </Row>
            <Row><br/></Row>
            <Row><br/></Row>
            </div>
            </Container>
            <Container fluid>
                {fetchBus.length === 0 ? <p>No bus found</p> : 
                fetchBus.map( (busVal) => <BusList bus={busVal}/>)}                
            </Container>
        </div>
    );
}

export default SearchPanel;