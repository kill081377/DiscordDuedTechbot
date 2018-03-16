const Discord = require("discord.js");

const client = new Discord.Client();
const version = "2.0.0";
const prefix = ">";
const commands = ["ping, kick(mod+), ban(admin+), say(vip+), purge(admin+), channels, lmtsim, servers, members, credits, updates, games, group, owners, DDSetup, HQ, Fox, updateannouce(lua c)"];
const admins = [""];

client.on('ready', () => {
 var randomplayings = [
        'error',
        'Idk',
        'Mind youre own bussines',
        'Upgrating myself!',
        'Coding myself!'
];
  console.log('I am hot and ready!');
  client.user.setPresence({ game: { name: `${prefix}help | ${randomplayings[Math.floor(Math.random()*randomplayings.length)]}`, type: 0 } });
 //client.channels.get('422040200177254410').send(`<@271656317758734336> is officialy taking a break from coding, he has been working on me for 5 days now, So fair well!`);\\
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
if(!message.member.roles.some(r=>["Admin", "Mod", "Founder", "Owner", "Co-Owner"].includes(r.name)) )
    return message.reply("You do not have the permission");
   else {

    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{});

    message.channel.send(sayMessage);
   } 
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

  if (command === "math") {
   var numbers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
  ];
   message.reply(`${numbers[Math.floor(Math.random()*numbers.length)]}`)
  }
 
  if (command === "channels") {
    message.reply(`We have ${client.channels.size}`)
  }

  if (command === "lmtsim") {
   message.reply(`game.ReplicatedStorage.Limitteds["LIMITED"].Privates.SELLERUSERNAME.Price.Value = 1, http://pastebin.com/raw/r7NkBbDv`)
  }
 
  if (command === "servers") {
    message.reply(`im on ${client.guilds.size} servers`)
  }

  if (command === "members") {
    message.reply(`This server has ${guild.memberCount} members!`)
  }

  if (command === "") {
   message.reply("```[ERROR!]:Command Not Found! Type -help```") 
  }
 
  if (command === "credits") {
   message.reply("```© 2018 DuedTech, DaDragon (FFTTWW), LuaC (kill081377) You can also say -owners.```")
  }
 
 if (command === "games") {
   message.reply(" :video_game:WIP!:video_game: ")
  }
 
 if (command === "group") {
   message.reply()
  }
 
 if (command === "owner") {
  message.channel.send("Lua C Is The Creator Of Me :slight_smile:")
  }
 
 if (command === "DDSetup") {
   message.reply("```DaDragons Setup: 2017 ASUS Laptop, Mouse: Razer Naga Trinity, Keybored: Razer Ornata, Main-Screen: Samsung Flat Screen.```")
  }
 
 if (command === "updates") {
 message.reply("```[NEW UPDATES!]:24/7 uptime!```")
 }
 
 if (command === "HQ") {
   message.reply("WIP!:video_game:")
 }
 
 if (command === "Fox") {
   message.reply("https://imgur.com/gallery/S1OPVB6")
  }

 if (command === "updateannouce") {
  message.channel.send(version); 
 }
 
 if (command === "commands") {
  let embed = new Discord.RichEmbed();
  message.reply("Commands Sent!")
  embed.setColor('#00a3cc');
  embed.setThumbnail('https://cdn.discordapp.com/avatars/421669430074802176/c7e25680d2ad2142799a9040daed0c58.png');
  embed.addField('Commands', commands);
  embed.setTimestamp();
  client.users.find('id', `${message.author.id}`).send({ embed });
 }
 
});

client.login(process.env.Token);
