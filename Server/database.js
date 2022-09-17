import {createPool} from 'mysql';

let pool = createPool({
    host :"localhost",
    user :"root",
    password : "password",
    database : "busReservation",
    connectionLimit:10
})

export default pool;