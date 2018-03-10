const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"

client.on('ready', () => {
    var games = [
        `${client.guilds.size} Servers`,
        `${client.users.size} Users`,
        `${client.channels.size} Channels`
    ];
    client.user.setPresence({ game: { name: `${prefix}help | ${games[Math.floor(Math.random()*games.length)]}`, type: 0 } });
    client.user.setUsername('Twobit');
    console.log('I am ready Adam!');
    console.log(`I have started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  
    setInterval(function() {
        totalTime++;
}, 1);

client.on('message', message => {
  if (message.content == prefix + "test") {
    message.reply('idk')
  };

  if (message.content === prefix + "") {
    message.reply('```[ERROR!]:Command Not Found! Type -help```')
  };
  
   if (message.content === prefix + "XD") {
    message.reply('**JUST DO IT!!**')
  };
  
  if (message.content === prefix + "credits") {
    message.reply('```© 2018 DuedTech```')
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
    message.reply(':video_game:WIP!:video_game:')
  };

});
 
client.login(process.env.BOT_TOKEN);
