import nodemailer from 'nodemailer';

export default function sendMail(mailid,name,callback){

    let mailText = 'Your ticket for '+name+' has been confirmed'
    let transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'someone@gmail.com',
            pass:'passcode'
        }       
        })
    

    let mailContent = {
        from:'someone@gmail.com',
        to:mailid,
        subject:'Your ticket has been confirmed',
        text:mailText
    }
    
    transport.sendMail(mailContent,(error,info) => {
        if(error){
            console.error(error.message);
        }
        console.log(info.response);
        return callback('Successful');
    })
    
}