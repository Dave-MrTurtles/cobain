const Discord = require('discord.js');
//const settings = require('../settings.json');
module.exports = member => {
  let ownerid = 275303108589125633;
  let guild = member.guild;
  let modlog = guild.channels.find('name', 'nieuwkomers');
  if (!modlog) return;
  guild.channels.get(modlog.id).sendEmbed(new Discord.RichEmbed()
    .setColor(0x0013CF0E)
    .setTimestamp()
    .addField('Welkom!', `${member.user} is erbij gekomen! :wave:`));
  if (member.id === ownerid) {
    guild.defaultChannel.sendMessage('**Welkom <@165471100807938048>, creator of this bot!**')
  }
  member.sendEmbed(new Discord.RichEmbed()
    .setColor(0x0013CF0E)
    .setTimestamp()
    .addField('Welkom in de Cobain Familie!', `Check aub even het kanaal <#635781283779182612>.`));
};
