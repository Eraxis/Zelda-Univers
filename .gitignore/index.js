const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Zelda Unviers, zu!help");
    console.log("Bot prêt");
});

bot.login(process.env.TOKEN)
