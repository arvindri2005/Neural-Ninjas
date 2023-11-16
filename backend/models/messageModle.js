const mongose = require('mongose');

const messageModel = mongose.Schema(
    {
        sender:{type:mongose.Schema.Types.ObjectId, ref: "User"},
        chat:{type:mongose.Schema.Types.ObjectId, ref: "chat"}
    },

    {
        timestamps:true,
    }
);


const Message = mongose.model("message", messageModel);

module.exports = Message;