const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error :no_entry:`, `Je moet iemand mentionen!`)).then(m => m.delete(10000));
  const embed98 = new Discord.RichEmbed()
    .setColor(0x00AB29D4)
    .setTimestamp()
    .addField(`Avatar of ${user.username}`, `${user.avatarURL}`)
    .setThumbnail(user.avatarURL)
  message.channel.sendEmbed(embed98);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ava', 'av'],
  permLevel: 1
};

exports.help = {
  name: 'avatar',
  rank: 'Member',
  description: '(MEMBER) - Haalt avatar URL binnen van de persoon die je mentioned.',
  usage: 'avatar [mention]'
};
