
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



























client.login('NTE1MTUyMzE2MDY0NTk1OTg3.DthB7Q.1bw2Au47nikGRv_7xIXDKI6P77Q');
