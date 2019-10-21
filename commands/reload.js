exports.run = (client, message, args) => {
  message.delete();
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  } else {
    
  } 
  if (!command) {
    return message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error :no_entry:`, `Ik kan de volgende commando niet vinden: ${args[0]}!`)).then(m => m.delete(10000));
  } else {
    message.channel.sendMessage(`Volgende commando herladen: ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Succesvol Herladen: ${command}`).then(m => m.delete(5000));
          })
          .catch(e => {
            m.edit(`Commando herladen gefaald: ${command}\n\`\`\`${e.stack}\`\`\``).then(m => m.delete(5000));
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['r'],
  permLevel: 5
};

exports.help = {
  name: 'reload',
  rank: 'Owner',
  description: '(OWNER) - Herlaad de specifieke commando aangegeven.',
  usage: 'reload <commandonaam>'
};
