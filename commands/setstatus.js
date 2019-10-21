const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let login = args.join(' ');
  if(!login) return message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor(0x00EB1A1A)
  .setTimestamp()
  .addField(`Error :no_entry:`, `Geen status ingevoerd!`)).then(m => m.delete(10000));
  message.channel.sendEmbed(new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .setTimestamp()
      .addField(`Succesvol :white_check_mark:`, `Succesvol status aangepast!`)).then(m => m.delete(10000));
  client.user.setGame(login, 'https://www.twitch.tv/roblox');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 6
};

exports.help = {
  name: 'setstatus',
  rank: 'Owner',
  description: '(OWNER) - Zet de status van de bot: Streaming <text>',
  usage: 'status'
};
