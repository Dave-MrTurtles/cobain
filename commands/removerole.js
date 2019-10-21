const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  let role2 = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error :no_entry:`, `Je moet iemand mentionen!`)).then(m => m.delete(10000));
  if (role2.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error :no_entry:`, `Je moet een role opgeven!`)).then(m => m.delete(10000));
  let role = message.guild.roles.find('name', role2);
  if (!role) return message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error :no_entry:`, `Ik kan de volgende role niet vinden ${role2} (Hoofdletter gevoelig)!`)).then(m => m.delete(10000));
  
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error :no_entry:`, `Ik heb niet de juiste/benodigde permissies om dit uit te voeren!`)).then(m => m.delete(10000));

  if (!message.guild.member(user).roles.has(role.id)) {
    message.channel.sendEmbed(new Discord.RichEmbed()
      .setColor(0x00EB1A1A)
      .setTimestamp()
      .addField(`Error :no_entry:`, `Deze gebruiker heeft niet de role: ${role2}!`)).then(m => m.delete(10000));
  } else {
    message.guild.member(user).removeRole(role).then(() => {
      message.channel.sendEmbed(new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .setTimestamp()
      .addField(`Succesvol :white_check_mark:`, `Succesvol de role **${role2}** van **${user}** verwijderd!`)).then(m => m.delete(10000));
    }); 
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'removerole',
  rank: 'Owner',
  description: '(OWNER) - Verwijderd de opgegeven role van de opgegeven speler.',
  usage: 'removerole [mention] [role]'
};
