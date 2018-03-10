const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

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
    message.reply('Commands:+test, +owners , +credits, +games, +group, +DDSetup Were adding more soon!')
  };

  if (message.content == prefix + "DDSetup") {
    message.reply('```DaDragons Setup: 2017 ASUS Laptop, Mouse: Razer Naga Trinity, Keybored: Razer Ornata, Main-Screen: Samsung Flat Screen.```')
  }

});

  if (message.content === prefix + "HQ") {
    message.reply(' :video_game:WIP!:video_game: ')
  };

client.login(process.env.BOT_TOKEN);
