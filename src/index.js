/*
    Voidbot v2, made by saltybiscuits
    Licensed under the BSD license.
*/

import Discord from "discord.js";
import { testEmbed } from 'richEmbeds.js';
import fs from "fs";

const cl = new Discord.client();
client.commands = new Discord.Collection();

//TODO: implement configs as JSON


//TODO: let the server admin change the command prefix -- thanks to UtopicUnicorns, discord.js-commando will be used
let cmdSymbol = "@";
let ping = cl.ping();
let uptime = cl.uptime();

//Console check to see if the bot is working.
cl.on("ready", () => {
    console.log(`Logged in as ${cl.user.tag}.`);
});

/*
  ==============================================================================================
   COMMANDS START HERE
  ==============================================================================================
*/


/*
  Ping command: sends delay time to server
*/
cl.on("message", msg => {
    if (msg.content === `${cmdSymbol}ping`) {
        msg.reply(`Pong! The response time is ${ping}`);
    }
});


/*
  Uptime command: sends time since boot up to server
*/
cl.on("message", msg => {
    if (msg.content === `${cmdSymbol}status`) {
        msg.reply(`Uptime: **${uptime}**`);
    }
});


/*
  Server greeter: sends a message for every single new member joining the guild.
*/
cl.on("guildMemberAdd", member => {
    //Sets variable for member's channel so the bot can DM said member
    const channel = member.guild.channels.find(ch => ch.name === "member-log");
    //Returns null if no channel is found (the user has server DMs disabled)
    if (!channel) return;
    channel.send(`Welcome to the Void Linux server, ${member}! Get familiar with our rules over at #welcome.`)
});


/*
  Test embed: tests rich embedding
*/
cl.on("message", msg => {
    if (msg.content === `${cmdSymbol}testEmbed` ) {
        msg.reply(testEmbed);
    }
});


/*
  Change cmdSymbol: command for changing the command prefix
*/
cl.on("message", msg => {
    if (msg.content.startsWith(`${cmdSymbol}changeSymbol`)) {

    }
});