import pool from '../../database.js';

function getByTo(to,callback) {
    console.log("Inside DAO..." + to);

    pool.query(`select * from bus where  bus_to = ?`,[to], (err,result,fields) => {
    if(err){
        return console.log("Error while trying to fetch bus details using from and to"+err);
    }
    console.log("Inside DAO To" + result);
    return callback(result);
})}

export default getByTo;