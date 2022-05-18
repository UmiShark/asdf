const { Discord, Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token = process.env['token']
const keepAlive = require("./server")

client.once('ready', () => {
  console.log('Bot is online')
});
client.on('messageCreate', message => {
  if(message.content === '!test'){
    message.channel.send('pong')
  }
});

keepAlive()
client.login(token)