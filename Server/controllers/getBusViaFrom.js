import getByFrom from './DAO/getBusByFrom.js';

function getBusViaFrom(req,callback) {
    console.log("Inside controller...");
    const bus = getByFrom(req.params.from,(bus) => {
        console.log(bus);        
        return callback(bus);
    });
    
}

export default getBusViaFrom;