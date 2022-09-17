import getByTo from './DAO/getBusByTo.js';

function getBusViaTo(req,callback) {
    console.log("Inside controller...");
    const bus = getByTo(req.params.to,(bus) => {
        console.log(bus);        
        return callback(bus);
    });
    
}

export default getBusViaTo;