const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed16 = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .addField(`Error :no_entry:`, `Ik mis een aantal om te verwijderen.`);
  let messagecount = parseInt(args.join(' '));
  if(messagecount > 99) {
    message.delete();
    message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x00EB1A1A)
      .addField(`Error :no_entry:`, `Limiet is 99!`));
      return;
  }
  if(!messagecount) {
    message.channel.sendEmbed(embed16).then(m => m.delete(5000));
    message.delete();
    return;
  }
  message.channel.fetchMessages({
    limit: messagecount + 1
  }).then(messages => message.channel.bulkDelete(messages));
  const embed15 = new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .addField(`Succesvol :white_check_mark:`, `${messagecount} berichten verwijderd!`);
  message.channel.sendEmbed(embed15).then(m => m.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'clear',
  rank: 'Admin',
  description: '(ADMIN) - Verwijderd aantal berichten aangegeven.',
  usage: 'clear <NUMMER>'
};
