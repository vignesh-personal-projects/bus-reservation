import pool from '../../database.js';

function getByFromToAndDate(from,to,date,callback) {
    console.log("Inside DAO..."+from + " " + to+" "+date+" ");

    pool.query(`select * from bus where bus_from = ? and bus_to = ? and bus_date = ?`,[from,to,date], (err,result,fields) => {
    if(err){
        return console.log("Error while trying to fetch bus details using from, to amd date"+err);
    }
    console.log("Inside DAO" + result);
    return callback(result);
})}

export default getByFromToAndDate;