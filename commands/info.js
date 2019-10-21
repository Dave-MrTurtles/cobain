const Discord = require('discord.js');
//const settings = require('../settings.json');
exports.run = (client, message) => {
  message.delete();
  message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor(0x00AB29D4)
  .setTimestamp()
  .addField(`Creator`, `Dave|MrTurtles#5744 - <@165471100807938048>`)
  .addField(`Info`, `Cobain Familie`)
  .addField(`Guilds`, `${client.guilds.array().length}`)
  .setThumbnail(client.user.avatarURL)).then(m => m.delete(10000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['inf', 'i'],
  permLevel: 1
};

exports.help = {
  name: 'info',
  rank: 'Member',
  description: '(MEMBER) - Informatie over de bot.',
  usage: 'info'
};
