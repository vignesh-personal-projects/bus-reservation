import pool from '../../database.js';
import getTicketId from './getTicketId.js';
import sendMail from './sendMail.js'
async function bookTicketDAO(req,callback){
    console.log("Inside DAO...");
    
    let ticket_id;
    await getTicketId((val)=>{
        val.forEach((row)=> {
        console.log(row);
        if(row.ticketid !== null)
         ticket_id = row.ticketid + 1;
        else
         ticket_id = 0;
        })
        });


    let val = await setTimeout(() => {
        pool.query(`insert into tickets(ticket_id,firstname,lastname,bus_id,mailid,phone,seat_no)
    values(?,?,?,?,?,?,?)`,[ticket_id,req.body.firstname,req.body.lastname,req.body.bus_id,req.body.mailid,req.body.phone,req.body.seat_no],(err,ticketId,fields) => {
        if(err)
        {
            console.log("Error while fetching ticket ID");
            return callback(err);
        }
    return callback(ticket_id);
    })
    },10);

    await sendMail(req.body.mailid,req.body.firstname,callback);


}

export default bookTicketDAO;