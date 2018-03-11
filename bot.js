const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDIxNjY5NDMwMDc0ODAyMTc2.DYQ9XQ.DYXhtbFCHOF3zN-Oz18co5S-448';
const prefix = '-'
const embed = new Discord.RichEmbed();

client.on('ready', () => {
 var games = [
        `${client.guilds.size} Servers`,
        `${client.users.size} Users`,
        `${client.channels.size} Channels`
];
  console.log('I am hot and ready!');
  client.user.setPresence({ game: { name: `${prefix}help | ${games[Math.floor(Math.random()*games.length)]}`, type: 0 } });
  embed.setColor('#d90000');
  embed.setThumbnail('https://cdn.discordapp.com/avatars/413956374402301952/94559ebbefada2929cb848e4d20b3353.png');
  embed.addField('UPDATE!', 'Hey admin!, im sorry for the spam :( ');
  embed.setTimestamp();
  client.users.find('id', '271656317758734336', '198918477795426305', '311252859658436608').send({ embed });

///198918477795426305

});

client.on('message', message => {
  if (message.content == prefix + "test") {
    message.reply('idk')
  };

  if (message.content === prefix + "oof") {
    embed.addField('Commands, lua c not found bro.');
   embed.setColor('#d90000');
   embed.setThumbnail('https://cdn.discordapp.com/avatars/421669430074802176/c7e25680d2ad2142799a9040daed0c58.png');
   embed.setTimestamp();
  };
 
  if (message.content === prefix + "") {
    message.reply('```[ERROR!]:Command Not Found! Type -help```')
  };

   if (message.content === prefix + "update") {
    message.reply('This is the new update Calling you user! (Working Stats:Offline/Broken WIP!)')
  };

  if (message.content === prefix + "credits") {
    message.reply('```© 2018 DuedTech, ID:DaDragon1#2202 NAME:DaDragon (FFTTWW), ID:LuaC#7472 NAME:LuaC (kill081377) You can also say -owners.```')
  };

  if (message.content === prefix + "games") {
    message.reply(' :video_game:WIP!:video_game: ')
  };

  if (message.content === prefix + "group") {
    message.reply('https://web.roblox.com/groups/group.aspx?gid=182116')
  };

  if (message.content === prefix + "owners") {
    message.reply('```Credits: ID:DaDragon1#2202 NAME:DaDragon (FFTTWW), ID:LuaC#7472 NAME:LuaC (kill081377)```')
  };

  if (message.content === prefix + "help") {
    message.reply('Commands:-test, -owners , -credits, -games, -group, -DDSetup Were adding more soon!')
  };

  if (message.content === prefix + "error") {
    message.reply('https://i.imgur.com/VbgZ5JS.gif')
  };

  if (message.content == prefix + "DDSetup") {
    message.reply('```DaDragons Setup: 2017 ASUS Laptop, Mouse: Razer Naga Trinity, Keybored: Razer Ornata, Main-Screen: Samsung Flat Screen.```')
  };

  if (message.content === prefix + "updates") {
    message.reply('```[NEW UPDATES!]:24/7 uptime!```')
  };

  if (message.content === prefix + "HQ") {
    message.reply('WIP!:video_game:')
  };

});

client.login(process.env.BOT_TOKEN);
