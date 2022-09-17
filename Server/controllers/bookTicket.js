import Ticket from "../models/Ticket.js";
import bookTicketDAO from "./DAO/bookTicketDAO.js";

function bookTicket(req,callback){
    console.log("Inside controller...");
    bookTicketDAO(req,(ticket_id)=>
    {
        console.log("Return from controller...");
        let ticket = new Ticket(ticket_id,req.body.firstname,req.body.lastname,req.body.phone,req.body.mailid,req.body.bus_id,req.body.seat_no);
        return callback(ticket);
    })
}

export default bookTicket;