const Discord = require("discord.js");

module.exports = {
  name: 'purge',
  execute(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) //Here we check if the user can run the command.
    return message.channel.send("You are not allowed to run this command.");

  const deleteCount = parseInt(args[0], 10); //This will get the number of messages we want to delete as an integer.
  if (!deleteCount || deleteCount < 2 || deleteCount > 100) //This makes sure that the minimum amount of messages we can delete is 2, and the max is 100. You can change this if you want.
    return message.channel.send(
      "Please specify how many messages you would like to purge. (min 2, max 100)"
    );
    message.channel
    .bulkDelete(deleteCount) //This will delete the specified number of messages.
    .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
    }
  }
