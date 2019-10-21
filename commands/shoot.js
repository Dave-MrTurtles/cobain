const Discord = require('discord.js');

exports.run = (client, message) => {
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error :no_entry:`, `Je moet iemand mentionen!`)).then(m => m.delete(10000));

    const embed2 = new Discord.RichEmbed()
    .setColor(0x00AB29D4)
    .setTimestamp()
    .addField(`${message.author.username} vermoorde:`, `${message.mentions.users.map(m => `**${m}** :gun:`).join('\n')}`)

    message.delete();
    message.channel.sendEmbed(embed2);
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'shoot',
  rank: 'Member',
  description: '(MEMBER) - Schiet personen.',
  usage: 'shoot [mention]'
};