const Discord = require('discord.js');
//const settings = require('../settings.json'); 
exports.run = (client, message) => {
  let prefix = ",";
  message.delete();
  let guild = message.guild;
    const embed45 = new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .setTimestamp()
      .addField(`Rank`, `Your rank is ${message.author.client.elevation(message)}`)
    const embed44 = new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .setTimestamp()
      .addField(`Explaination`, `Test`)
    const embed46 = new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .setTimestamp()
      .addField(`Explaination`, `Hoi, Jij bent de owner van de server en gebruikt mijn bot!\n Dankjewel voor je support!`)
    const embed47 = new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .setTimestamp()
      .addField(`Explaination`, `Je bent Underboss in **${guild.name}**!`)
    const embed48 = new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .setTimestamp()
      .addField(`Explaination`, `Je bent Consigliere in **${guild.name}**!`)
    const embed49 = new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .setTimestamp()
      .addField(`Explaination`, `Je bent Capo in **${guild.name}**!`)
    const embed50 = new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .setTimestamp()
      .addField(`Explaination`, `Je bent Soldier in **${guild.name}**.`)
    const embed51 = new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .setTimestamp()
      .addField(`Explaination`, `Je bent gebanned voor het gebruikt van deze bot.`)

    message.author.sendEmbed(embed45);
    if (client.elevation(message) == 6) {
      message.author.sendEmbed(embed44);
    } else if (client.elevation(message) == 0) {
      message.author.sendEmbed(embed51);
    } else if (client.elevation(message) == 4) {
      message.author.sendEmbed(embed47);
    } else if (client.elevation(message) == 3) {
      message.author.sendEmbed(embed48);
    } else if (client.elevation(message) == 2) {
      message.author.sendEmbed(embed49);
    } else if (client.elevation(message) == 1) {
      message.author.sendEmbed(embed50);
    } else if (client.elevation(message) == 5) {
      message.author.sendEmbed(embed46);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mylevel', 'mylvl', 'myr', 'lvl'],
  permLevel: 0
};

exports.help = {
  name: 'myrank',
  rank: 'Member',
  description: '(MEMBER) - Laat zien wat je bent in een server.',
  usage: 'myrank'
};
