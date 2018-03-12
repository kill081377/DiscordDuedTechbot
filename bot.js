const Discord = require("discord.js");

const client = new Discord.Client();
const embed = new Discord.RichEmbed();
const whitelisted = "271656317758734336";
const prefix = ">";


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
   client.user.setGame(`${prefix} is the prefix!`);
});

client.on("guildCreate", guild => {

  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});


client.on("message", async message => {




  if(message.author.bot) return;



  if(message.content.indexOf(prefix) !== 0) return;




  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();



  if(command === "ping") {


    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if(command === "say") {


    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{});

    message.channel.send(sayMessage);
  }

  if(command === "kick") {
    if(!message.member.roles.some(r=>["Admin", "Mod", "Founder", "Owner", "Co-Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");

    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

  if(command === "ban") {
    if(!message.member.roles.some(r=>["Admin", "Founder", "Owner", "Co-Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} Banned By ${message.author.tag} Reason: ${reason}`);
  }

  if(command === "purge") {

    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
if (command === "whitelistcheck") {
    if (message.author.id === whitelisted) {
      message.reply("nice :) ")
    }
else {
  message.reply("u do not no de wey!")
}
}

  if (command === "channels") {
    message.reply(`We have ${client.channels.size}`)
  }

  if (command === "servers") {
    message.reply(`im on ${client.guilds.size} servers`)
  }

  if (command === "members") {
    message.reply(`This server has ${guild.memberCount} members!`)
  }

});

client.login(process.env.Token);
