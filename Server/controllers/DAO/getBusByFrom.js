import pool from '../../database.js';

function getByFrom(from,callback) {
    console.log("Inside DAO..."+from );

    pool.query(`select * from bus where bus_from = ? `,[from], (err,result,fields) => {
    if(err){
        return console.log("Error while trying to fetch bus details using from and to"+err);
    }
    console.log("Inside DAO" + result);
    return callback(result);
})}

export default getByFrom;