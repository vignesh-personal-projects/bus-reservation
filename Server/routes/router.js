import express from 'express';
import getBusViaFromTo from '../controllers/getBusViaFromTo.js';
import getBusViaFrom from '../controllers/getBusViaFrom.js';
import getBusViaTo from '../controllers/getBusViaTo.js';
import getBusViaFromToDate from '../controllers/getBusViaFromToDate.js';
import bookTicket from '../controllers/bookTicket.js';

const router = express.Router();
router.all('/',(req,res) =>
{        
        res.setHeader("Access-Control-Allow-Headers" , "Content-Type");
        res.setHeader("Access-Control-Allow-Origin" , "http://localhost:3000");
        res.setHeader("Access-Control-Allow-Methods" , "OPTIONS,POST,GET");
    
    
    res.send("Hello");
});

router.get('/',(req,res)=> {
    console.log("Request received...");    
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Hello');
}    
)

router.get('/busFromTo/:from/:to',(req,res) => {
    console.log("Request reached router...");
    const bus = getBusViaFromTo(req,(bus)=>{
        console.log("Inside router res..."+bus)
        res.send(bus)
    })   
});

router.get('/bus/:from/:to/:date',(req,res) => {
    console.log("Request reached router...");
    const bus = getBusViaFromToDate(req,(bus)=>{
        console.log("Inside router res...");
        console.log(bus);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(bus);
    })   
});

router.get('/busFrom/:from',(req,res) => {
    console.log("Request reached router...");
    const bus = getBusViaFrom(req,(bus)=>{
        console.log("Inside router res..."+bus)
        res.send(bus)
    })   
});

router.get('/busTo/:to',(req,res) => {
    console.log("Request reached router...");
    const bus = getBusViaTo(req,(bus)=>{
        console.log("Inside router res..."+bus)
        res.send(bus)
    })   
});

router.post('/bookTicket',(req,res) => {
    console.log("Post request received..");
    bookTicket(req,(ticket)=>{
        console.log(ticket);
        
        res.setHeader('Access-Control-Allow-Origin', '*');        
        res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers','Content-Type');
        res.send(ticket);
    })
})
export default router;