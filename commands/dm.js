const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  let user = message.mentions.users.first();
  let bericht = args.slice(1).join(' ');
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error :no_entry:`, `Je moet iemand mentionen!`)).then(m => m.delete(10000));
  if (!bericht) return message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error! :no_entry:`, `Je mist een bericht om te sturen.`)).then(m => m.delete(10000));
  const embed98 = new Discord.RichEmbed()
    .setColor(0x00AB29D4)
    .setTimestamp()
    .addField(`:mailbox:`, `${bericht}`)
  user.sendEmbed(embed98);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['direct', 'dime'],
  permLevel: 5
};

exports.help = {
    name: 'dm',
    rank: 'Owner',
    description: '(OWNER) - DMed een persoon die gementioned is.',
    usage: 'dm [mention] [bericht]'
  };