require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const token = process.env.DISCORD_TOKEN;
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('messageCreate', message => {
  console.log(`Received a message: ${message.content}`);

  if (message.author.bot || message.author.id === client.user.id) {
    console.log('Message is from a bot (or from itself), ignoring.');
    return;
  }
  if (message.content.trim() === '!hello') {
    console.log('!hello command detected, sending response.');
    message.channel.send(`Hello, ${message.author.username}! I'm Will-I, your assistant.`)
      .catch(console.error);
  }
  else if (message.content.trim() === '!goodbye') {
    console.log('!goodbye command detected, sending response.');
    message.channel.send(`Goodbye, ${message.author.username}! See you next time.`)
      .catch(console.error);
  }
  else {
    console.log('Command did not match !hello or !goodbye');
  }
});
client.login(token).catch(console.error);