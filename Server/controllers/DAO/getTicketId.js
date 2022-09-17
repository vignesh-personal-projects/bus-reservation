import pool from "../../database.js";

async function getTicketId(callback){
    pool.query(`select max(ticket_id) as ticketid from tickets`,(err,ticket_id) => {
        
        return callback(ticket_id);
    })
}
await getTicketId;
export default getTicketId;