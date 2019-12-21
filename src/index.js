/*
    Voidbot v2 //not necesarrily.
    Licensed under the BSD license.
*/

//Import Discord.js, note that the client is called cl here.
const Discord = require("discord.js");
const cl = new Discord.client();


//TODO: let the server admin change the command prefix
let cmdSymbol = "@";
let ping = cl.ping();
let uptime = cl.uptime();

//Console check to see if the bot is working.
cl.on("ready", () => {
      console.log(`Logged in as ${cl.user.tag}.`);
})

/*
  Ping command: sends delay time to server
*/
cl.on("message", msg => {
      if (msg.content === `${cmdSymbol}ping`) {
            msg.reply(`Pong! The response time is ${ping}`);
      }
})

/*
  Uptime command: sends time since boot up to server
*/
cl.on("message", msg => {
      if (msg.content === `${cmdSymbol}status`) {
            msg.reply(`Uptime: **${uptime}**`);
      }
})

/*
  Server greeter: sends a message for every single new member joining the guild.
*/
cl.on("guildMemberAdd", member => {
      //Sets variable for member's channel so the bot can DM said member
      const channel = member.guild.channels.find(ch => ch.name === "member-log")
      if (!channel) return;
      channel.send(`Welcome to the Void Linux server, ${member}`)
})


cl.login("placeholder");