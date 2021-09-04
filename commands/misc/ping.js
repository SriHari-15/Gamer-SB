module.exports = async (client, message) => {
  message.delete();
  const newMsg = await message.channel.send(`Ping: ${client.ws.ping}ms`);
  setTimeout(() => newMsg.delete(), 5000);
};
