const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var fortunes = [
        "Ja",
        "Nee",
        "Misschien",
        "Optiefen",
        "Nooit!",
        "fak jou man",
        "Natuurlijk!",
        "Sowieso!",
        "Zeker niet!"
    ];

    if (args[1]) {
        //message.reply(fortunes[Math.floor(Math.random() * fortunes.length)]);
        message.channel.sendEmbed(new Discord.RichEmbed()
        .setColor(0x00AB29D4)
        .setTimestamp()
        .addField(`Reactie`, fortunes[Math.floor(Math.random() * fortunes.length)]));
    } else {
        message.delete(10000);
        message.channel.sendEmbed(new Discord.RichEmbed()
        .setColor(0x00AB29D4)
        .setTimestamp()
        .addField(`Error`, `Dit snap ik niet...`)).then(m => m.delete(10000));
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ball', '8'],
  permLevel: 1
};

exports.help = {
  name: '8ball',
  rank: 'Member',
  description: '(MEMBER) - Beantwoord gesloten vragen.',
  usage: '8ball [text]'
};
