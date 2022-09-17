import pool from '../../database.js';

function getByFromAndTo(from,to,callback) {
    console.log("Inside DAO..."+from + " " + to);

    pool.query(`select * from bus where bus_from = ? and bus_to = ?`,[from,to], (err,result,fields) => {
    if(err){
        return console.log("Error while trying to fetch bus details using from and to"+err);
    }
    console.log("Inside DAO" + result);
    return callback(result);
})}

export default getByFromAndTo;