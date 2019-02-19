const Discord = require('discord.js');

var PREFIX = "zu!";

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Zelda Unviers, zu!help");
    console.log("Bot prêt");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: '',
                fields: [{
                    name: "Lien d'invitation Discord",
                    value: 'https://discord.gg/SJcYEhx',
                    inline: false
                }]
            }
        });
        break;
    }
});

bot.login("process.env.TOKEN");
