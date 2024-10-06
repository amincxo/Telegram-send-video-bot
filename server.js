const TelegramBot = require('node-telegram-bot-api')
const token = '6541290388:AAE6eZRUKrm4rbD2F6Gf7fhFC_xqgBIUn3A';
const admin = 234846044;

const bot = new TelegramBot(token,{polling: true});


// bot.onText(/\/start/ , msg => {
//     console.log(msg);
//     setTimeout(()=>{bot.sendMessage(msg.chat.id ,'سلام به ربات جغی ها خوش امدید')},300);
//     bot.sendMessage(234846044 , '  \nرییس یک جغی وارد شد \n '
//      +"id: "+ msg.chat.id
//      +"\nنام :  "+ msg.chat.first_name
//      +"\n یوزرنیم : "+ msg.chat.username
//      +"\nپیام : "+ msg.text
//      );
// })
let counter =0;
bot.on('message' , msg  => {
    if (msg.text =='+'){
        counter++
    }
    else if (msg.text == 'نمایش شمارنده'){
        bot.sendMessage(admin, counter)
    }
    if (msg.text == "/start") {
        console.log(msg);
        setTimeout(()=>{bot.sendMessage(msg.chat.id ,'سلام به ربات جغی ها خوش امدید')},300);
        bot.sendMessage(234846044 , '  \nرییس یک جغی وارد شد \n '
         +"id: "+ msg.chat.id
         +"\nنام :  "+ msg.chat.first_name
         +"\n یوزرنیم : "+ msg.chat.username
         +"\nپیام : "+ msg.text
         );
         
    }
    
    else if (msg.text == 'سلام'){
        bot.sendMessage(234846044 , 'یک نفر وارد شد')
        bot.sendVideo(msg.chat.id , 'BAACAgQAAxkBAAIDh2Uzsg9vR1DPIg22QvbtI5M2Dot-AAK-DwACx9z4UqTYvecUMdGCMAQ')
        bot.sendVideo(msg.chat.id , 'BAACAgQAAxkBAAIDrGUztXRe_PB8Vs54FvRrcFpYtEw4AAKPEQAChQFpUUrRFhWgvwLiMAQ')
        bot.sendVideo(msg.chat.id , 'BAACAgQAAxkBAAIDr2UztYoKzbtKo55s3gh-OohhTYZfAAJHDAAC4TBQU6tkfns0YXYSMAQ')
        // bot.sendVideo(msg.chat.id , 'BBAACAgQAAxkBAAIDr2UztYoKzbtKo55s3gh-OohhTYZfAAJHDAAC4TBQU6tkfns0YXYSMAQ')
        bot.sendVideo(msg.chat.id , 'BAACAgQAAxkBAAIDsmUztbVt-_E75Dz1smBda0iriGATAAIxEgACIW-IUbX5V0Wtjrz8MAQ')
        
    }
    console.log(msg)
    if (msg.chat.id != 234846044) {
        // ریپورت پیام به ادمین
        bot.sendMessage(234846044 , '  \nرییس یک جغی پیام داد \n '
        +"id: "+ msg.chat.id
        +"\nنام :  "+ msg.chat.first_name
        +"\n یوزرنیم : "+ msg.chat.username
        +"\nپیام : "+ msg.text
        )
        bot.sendVideo(234846044)
    }
     if (msg.chat.id != 234846044){
     }
     
     
        else{// جواب اماده به کار بودن ربات
         bot.sendMessage(234846044 , ' بله رییس ')
        }
        if(msg.video.mime_type == 'video/mp4')
        {
           bot.sendMessage(234846044 , msg.video.file_id)
        }
}
)   
    

console.log('every thing in order ...')
