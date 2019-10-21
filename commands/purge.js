exports.run = function(client, message, args) {
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear2', 'c2'],
  permLevel: 4
};

exports.help = {
  name: 'purge',
  rank: 'Admin',
  description: '(ADMIN) - Verwijderd aantal berichten zonder reactie van de bot.',
  usage: 'purge <nummer>'
};
