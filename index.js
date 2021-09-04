const Discord = require("discord.js-self");
const client = new Discord.Client();

require("dotenv-flow").config();
const token = process.env.TOKEN;
const prefix = ".";

//All command imports
const pingCommand = require("./commands/misc/ping");

client.on("ready", () => {
  console.log(`${client.user.tag} is ready!`);
});

client.on("message", (message) => {
  if (
    !message.content.startsWith(prefix) ||
    message.author.id !== client.user.id
  ) {
    return;
  }

  const args = message.content.substring(prefix.length).split(/ +/);
  const command = args.shift();

  if (command == "ping") {
    pingCommand(client, message);
  }
});

client.login(token);

// Repl part
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("ok");
});
server.listen(3000);
