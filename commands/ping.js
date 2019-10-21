exports.run = (client, message) => {
  message.delete();
  message.channel.sendMessage('Ping?')
    .then(msg => {
      msg.edit(`Pong! (Duurde: ${msg.createdTimestamp - message.createdTimestamp}ms)`).then(m => m.delete(10000));
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'ping',
  rank: 'Member',
  description: '(MEMBER) - Ping commando.',
  usage: 'ping'
};
