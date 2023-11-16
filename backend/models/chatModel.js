const mongose = require('mongose');

const chatModel = mongose.Schema(
    {
        chatName:{type:String,trim:true}
    },

    {
        timestamps:true,
    }
);


const Chat = mongose.model("chat", chatModel);

module.exports = Chat;