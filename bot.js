const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDIxNjY5NDMwMDc0ODAyMTc2.DYQ9XQ.DYXhtbFCHOF3zN-Oz18co5S-448';
const prefix = '+'
const embed = new Discord.RichEmbed();

client.on('ready', () => {

  console.log('I am hot and ready!');
  client.user.setGame('Updating!/Weaking up arthur!');
  client.user.setStatus('online')
  client.user.setUsername('A duck with no life :( )');
  embed.setColor('#0DB221');
  embed.setThumbnail('https://cdn.discordapp.com/avatars/413956374402301952/94559ebbefada2929cb848e4d20b3353.png');
  embed.addField('OOOOOOOOOF BRO!', 'Oi artuhr weak up cunt!');
  embed.setTimestamp();
  client.users.find('id', '271656317758734336', '198918477795426305').send({ embed });

///198918477795426305

});

client.on('message', message => {
  if (message.content == prefix + "test") {
    message.reply('idk')
  };

  if (message.content === prefix + "") {
    message.reply('```[ERROR!]:Command Not Found! Type -help```')
  };
  
   if (message.content === prefix + "update") {
    message.reply('This is the new update ${message.author.username}!')
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
