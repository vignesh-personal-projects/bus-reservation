import getBusByFromToAndDate from './DAO/getBusByFromToAndDate.js';

function getBusViaFromToDate(req,callback) {
    console.log("Inside controller...");
    const bus = getBusByFromToAndDate(req.params.from,req.params.to,req.params.date,(val) => {
        let busList = [];
        val.forEach((row) => { 
            busList.push(row);
        })
        return callback(busList);
    });
    
}

export default getBusViaFromToDate;