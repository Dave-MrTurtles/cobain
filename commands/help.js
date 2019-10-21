const Discord = require('discord.js');
//const settings = require('../settings.json');
exports.run = (client, message, params) => {
  let prefix = ".";
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .addField('= Commando lijst = ', `Gebruik ${prefix}help <commando> voor details\n\n${client.commands.map(c => `${prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} - ${c.help.rank}`).join('\n')}`));
    message.delete();
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendEmbed(
        new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .addField(`= ${command.help.name} =`, ` \n${command.help.description}\nGebruiksaanwijzing - ${prefix}${command.help.usage}\n`));
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 1
};

exports.help = {
  name: 'help',
  rank: 'Member',
  description: 'Laat alle commando\'s zien die er zijn.\n',
  usage: 'help [commando]'
};
