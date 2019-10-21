const Discord = require('discord.js');
module.exports = (guild, user) => {
  guild.defaultChannel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00E90B0B)
    .setTimestamp()
    .addField('Banned!', `${user.username}#${user.discriminator} is zojuist gebanned!`));
};
