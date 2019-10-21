const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete();
    let question = args.join(' ');
    let user = message.author.username
    if (!question) return message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x00EB1A1A)
      .addField(`Error :no_entry:`, `Ik mis een vraag/stelling!`)).then(m => m.delete(5000));
    message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .addField(`Strawpoll door ${user}`, `${question}`)).then(function(message) {
        message.react('✅');
        message.react('❌');
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'strawpoll',
  rank: 'Moderator',
  description: '(Moderator) - Maakt een strawpoll voor gemak.',
  usage: 'strawpoll [text]'
};

