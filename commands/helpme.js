const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  message.delete();
  let modlog = message.guild.channels.find('name', 'gang-lead');
  if (!modlog) { 
    message.reply('Oeps er ging iets fout...\nWil je de commando graag overnieuw doen!').then(m => m.delete(5000));
    try{
      var server = message.guild;
      var name = "gang-lead";
  
      server.createChannel(name, "text");
    }catch(e){
      console.log(e.stack);
    }
    return; 
}
  const embed614 = new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error! :no_entry:`, `Je mist een beschrijving van je probleem.`)
  let problem = args.join(' ');
  if (!problem) return message.channel.sendEmbed(embed614).then(m => m.delete(10000));
  const embed66 = new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error! :no_entry:`, `Deze commando werkt niet in DM.`)
  const embed612 = new Discord.RichEmbed()
    .setColor(0x00F1950B)
    .setTimestamp()
    .addField(`Gerapporteerd! :mailbox:`, `We zullen zo snel mogelijk terug berichten!`)
  const embed613 = new Discord.RichEmbed()
    .setColor(0x00AB29D4)
    .setTimestamp()
    .addField(`Iemand wilt hulp! :no_good: `, `${message.author}`)
    .addField(`Gebruiker: `, `${message.author.username}#${message.author.discriminator}`)
    .addField(`Kanaalnaam: `, `${message.channel.name}`)
    .addField(`Probleem/Beschrijving: `, `${problem}`)
    .setThumbnail(client.user.avatarURL);
  if (message.channel.type == 'dm') return message.channel.sendEmbed(embed66).then(m => m.delete(10000));
  if (message.channel.type == 'group') return message.channel.sendEmbed(embed66).then(m => m.delete(10000));
  message.author.sendEmbed(embed612);
  client.channels.get(modlog.id).sendEmbed(embed613);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'helpme',
  rank: 'Member',
  description: '(MEMBER) - Gebruik deze commando als je hulp nodig hebt en wij er niet zijn om te reageren.\n',
  usage: 'helpme'
};
