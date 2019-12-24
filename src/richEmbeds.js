import Discord from "discord.js";

/*
  Test rich embed: used for
*/
export let testEmbed = new Discord.RichEmbed()
    .setColor('#44801d')
    .setTitle('Test Embed')
    .setDescription('This is a test embed. Please stop reading this >.<');


/*
  Help embed: pretty self explanatory.
*/
export let helpEmbed = new Discord.RichEmbed()
    .setColor('#44801d')
    .setTitle('Looking for help? This is the place to be!')
    .setDescription("You'll get any and all help here. TODO: finish this embed.");