const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDIxNjY5NDMwMDc0ODAyMTc2.DYQ9XQ.DYXhtbFCHOF3zN-Oz18co5S-448';
const prefix = '+'
const ddsetupmsg = "Message Here!"

client.on('ready', () => {
  console.log('I am hot and ready!');
});

client.on('message', message => {
  if (message.content == prefix + "test") {
    message.reply('idk')
  };

  if (message.content === prefix + "") {
    message.reply('```[ERROR!]:Command Not Found! Type +help```')
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
    message.reply('Commands:+test, +owners , +credits, +games, +group Were adding more soon!')
  };

  if (message.content == prefix + "DDSetup") {
    message.reply(ddsetupmsg)
  }

});

client.login(token);
