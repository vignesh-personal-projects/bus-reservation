import getByFromAndTo from './DAO/getBusByFromAndTo.js';

function getBusViaFromTo(req,callback) {
    console.log("Inside controller...");
    const bus = getByFromAndTo(req.params.from,req.params.to,(bus) => {
        console.log(bus);        
        return callback(bus);
    });
    
}

export default getBusViaFromTo;