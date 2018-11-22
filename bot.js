
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.reply('Hi!');
  }
});








const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ط§ظ„ط³ظ„ط§ظ… ط¹ظ„ظٹظƒظ…') {
    msg.reply('ظˆط¹ظ„ظٹظƒظ… ط§ظ„ط³ظ„ط§ظ… ظˆ ط±ط­ظ…ط© ط§ظ„ظ„ظ‡ ظˆ ط¨ط±ظƒط§طھظ‡');
  }
});



client.on('message', msg => {
  if (msg.content === 'ط§ظ„ط³ط¹ظˆط¯ظٹط©') {      
    msg.react("ًں‡¸ًں‡¦")
    msg.channel.send("ًں‡¸ًں‡¦")
  }
});

client.on('message', msg => {
  if (msg.content === 'ظ…طµط±') {      
    msg.react("ًں‡ھًں‡¬")
    msg.channel.send("ًں‡ھًں‡¬")
  }
});

client.on('message', msg => {
  if (msg.content === 'ط§ظ„ظ…ط؛ط±ط¨') {      
    msg.react("ًں‡²ًں‡¦")
    msg.channel.send("ًں‡²ًں‡¦")
  }
});

client.on('message', msg => {
  if (msg.content === 'ط§ظ„ط¹ط±ط§ظ‚') {      
    msg.react("ًں‡®ًں‡¶")
    msg.channel.send("ًں‡®ًں‡¶")
  }
});

client.on('message', msg => {
  if (msg.content === 'ط§ظ„ط¬ط²ط§ط¦ط±') {      
    msg.react("ًں‡©ًں‡؟")
    msg.channel.send("ًں‡©ًں‡؟")
  }
});

client.on('message', msg => {
  if (msg.content === 'ط§ظ„ط§ظ…ط§ط±ط§طھ') {      
    msg.react("ًں‡¦ًں‡ھ")
    msg.channel.send("ًں‡¦ًں‡ھ")
  }
});

client.on('message', msg => {
  if (msg.content === 'طھظˆظ†ط³') {      
    msg.react("ًں‡¹ًں‡³")
    msg.channel.send("ًں‡¹ًں‡³")
  }
});

client.on('message', msg => {
  if (msg.content === 'ط³ظˆط±ظٹط§') {      
    msg.react("ًں‡¸ًں‡¾")
    msg.channel.send("ًں‡¸ًں‡¾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ظ„ظٹط¨ظٹط§') {      
    msg.react("ًں‡±ًں‡¾")
    msg.channel.send("ًں‡±ًں‡¾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ظ‚ط·ط±') {      
    msg.react("ًں‡¶ًں‡¦")
    msg.channel.send("ًں‡¶ًں‡¦")
  }
});

client.on('message', msg => {
  if (msg.content === 'ط§ظ„طµظˆظ…ط§ظ„') {      
    msg.react("ًں‡¸ًں‡´")
    msg.channel.send("ًں‡¸ًں‡´")
  }
});

client.on('message', msg => {
  if (msg.content === 'ط¹ظ…ط§ظ†') {      
    msg.react("ًں‡´ًں‡²")
    msg.channel.send("ًں‡´ًں‡²")
  }
});

client.on('message', msg => {
  if (msg.content === 'ظ…ظˆط±ظٹطھط§ظ†ظٹط§') {      
    msg.react("ًں‡²ًں‡·")
    msg.channel.send("ًں‡²ًں‡·")
  }
});















var prefix = "="
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ظ„ظٹط³ ظ„ط¯ظٹظƒ طµظ„ط§ط­ظٹط§طھ');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**ظ…ظ†ط´ظ† ط´ط®طµ**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**ظ„ط§ ظٹظ…ظƒظ†ظ†ظٹ ط§ط¹ط·ط§ط، ط¨ط§ظ† ظ„ط§ط­ط¯ ط§ط¯ط§ط±ط© ط§ظ„ط³ظٹط±ظپط±**");
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + ` طھظ… ط·ط±ط¯ظ‡ ظ…ظ† ط§ظ„ط³ظٹط±ظپط± ` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	client.on('message', function(msg) {
    const prefix = '='
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('ًںŒگ** ظ†ظˆط¹ ط§ظ„ط³ظٹط±ظپط±**',`[** __${msg.guild.region}__ **]`,true)
      .addField('ًںڈ…** __ط§ظ„ط±طھط¨__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('ًں”´**__ ط¹ط¯ط¯ ط§ظ„ط§ط¹ط¶ط§ط،__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('ًں”µ**__ ط¹ط¯ط¯ ط§ظ„ط§ط¹ط¶ط§ط، ط§ظ„ط§ظˆظ†ظ„ط§ظٹظ†__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('ًں“‌**__ ط§ظ„ط±ظˆظ…ط§طھ ط§ظ„ظƒطھط§ط¨ظٹط©__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('ًںژ¤**__ ط±ظˆظ…ط§طھ ط§ظ„طµظˆطھ__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('ًں‘‘**__ ط§ظ„ط£ظˆظ†ظ€ط±__**',`**${msg.guild.owner}**`,true)
      .addField('ًں†”**__ ط§ظٹط¯ظٹ ط§ظ„ط³ظٹط±ظپط±__**',`**${msg.guild.id}**`,true)
      .addField('ًں“…**__ طھظ… ط¹ظ…ظ„ ط§ظ„ط³ظٹط±ظپط± ظپظٹ__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
	
	
	
	
	
	
	
	
	
	

	
	
	
	client.on('message', message =>{
    if(message.content === '=ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "=";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**م€Œ  Date - ط§ظ„طھط§ط±ظٹط® م€چ **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "م€Œ"+ Day + "-" + Month + "-" + Year + "م€چ")
             message.channel.sendEmbed(Date15);
    }
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	client.on('message', Sal => { // By Salto7#4595
  if(Sal.content === '=bot') { //ظ‡ظ†ط§ طھط؛ظٹط± ط§ظ„ط¨ط±ظپظٹظƒط³
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(client.user.avatarURL)
  .addField('Bot Name', client.user.username, true)
  .setFooter(client.user.tag, client.user.avatarURL, true)
  .addField('Bot Tag', client.user.discriminator, true)
  .addField('Bot id', client.user.id, true)
  .addField('Create Bot At', client.user.createdAt, true)
  Sal.channel.sendEmbed(embed);
}
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	client.on('message' , message => {
  var prefix = "=";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ظ„ظٹط³ ظ„ط¯ظٹظƒ طµظ„ط§ط­ظٹط§طھ');

    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("âœ…").then(r => msg.react("â‌ژ"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	client.on ('message',async Sal => { //By Salto7#4595
    let embed = new Discord.RichEmbed()
    if (Sal.content === "=id") {
      let embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setThumbnail(Sal.author.avatarURL)
     .setImage(Sal.author.avatarURL)
     .addField("ط§ط³ظ…ظƒ:",`${Sal.author.username}`, true)
     .addField('ط§ظٹط¯ظٹظƒ:',"" +  Sal.author.id, true)
     .addField('طھط§ظ‚ظƒ', Sal.author.discriminator, true)
     .addField('طھظ… ط§ظ„ط§ظ†ط´ط§ط، ظپظٹ', Sal.author.createdAt, true)
     Sal.channel.sendEmbed(embed);
    }
  });
	
	
	
	
	


	
	
	
	
	
	  client.on('message',function(message) {
  if (message.author.bot) return;
var prefix = "=";
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
	
	
	
	
	
	
	
	
	
	
	
	client.on('message', message => {
   
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
   
    var command = message.content.toLowerCase().split(" ")[0]; // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
    var args = message.content.toLowerCase().split(" ");
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
    var prefix = '='; // ظ‡ظ†ط§ طھظ‚ط¯ط± طھط؛ظٹط± ط§ظ„ط¨ط±ظپظƒط³ <==================
   
    if(command == prefix + 'role') {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
 
        let roleCommand = new Discord.RichEmbed()
        .setTitle(':white_check_mark: Role Command.')
        .setColor('GREEN')
        .setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\nâ‍¥ \`\`For give or delete from some one the role.\`\`\n\n**${prefix}role humans add <ROLE>**\nâ‍¥ \`\`For give the humans role.\`\`\n\n**${prefix}role humans remove <ROLE>**\nâ‍¥ \`\`For delete from the humans role.\`\`\n\n**${prefix}role bots add <ROLE>**\nâ‍¥ \`\`For give the bots role.\`\`\n\n**${prefix}role bots remove <ROLE>**\nâ‍¥ \`\`For delete from the bots role.\`\`\n\n**${prefix}role all add <ROLE>**\nâ‍¥ \`\`For give all role.\`\`\n\n**${prefix}role all remove <ROLE>**\nâ‍¥ \`\`For remove from all role.\`\``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
 
        if(!args[1]) return message.channel.send(roleCommand);
        if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);
 
        if(userM) {
            var argsRole = message.content.toLowerCase().split(' ').slice(2);
        }else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
            var argsRole = message.content.toLowerCase().split(' ').slice(3); // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
        }
 
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
 
        if(userM) {
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` Any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);
           
            if(!message.guild.member(userM.user).roles.has(getRole.id)) {
                message.guild.member(userM.user).addRole(getRole.id);
                message.channel.send(`:white_check_mark: | Successfully \`\`GIVE\`\` The role **${getRole.name}** To user **${userM.user.tag}**`);
            }else if(message.guild.member(userM.user).roles.has(getRole.id)) {
                message.guild.member(userM.user).removeRole(getRole.id);
                message.channel.send(`:white_check_mark: | Successfully \`\`DELETE\`\` The role **${getRole.name}** From user **${userM.user.tag}**`);
            }
        }else if(args[1] === 'humans') {
            let notArgs = new Discord.RichEmbed()
            .setTitle(':white_check_mark: Role Command.')
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role humans add <ROLE>**\nâ‍¥ \`\`For give the humans the role.\`\`\n\n**${prefix}role humans remove <ROLE>**\nâ‍¥ \`\`For delete the role from all humans.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs); // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
                let humansSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\nâœ… = Sure, give him the role.\n\nâ‌ژ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL) // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
 
                message.channel.send(humansSure).then(msg => {
                    msg.react('âœ…').then(() => msg.react('â‌ژ')) // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
 
                    let giveHim = (reaction, user) => reaction.emoji.name === 'âœ…'  && user.id === message.author.id;
                    let dontGiveHim = (reaction, user) => reaction.emoji.name === 'â‌ژ' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
                                message.guild.member(m).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Humans** The role **${getRole.name}** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontGive.on('collect', r => { // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
                let humansSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\nâœ… = Sure, remove the role from him.\n\nâ‌ژ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(humansSure).then(msg => {
                    msg.react('âœ…').then(() => msg.react('â‌ژ')) // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
 
                    let removeRole = (reaction, user) => reaction.emoji.name === 'âœ…'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === 'â‌ژ' && user.id === message.author.id;
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
                                message.guild.member(m).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Humans** .`);
                                }, 10000)
                            });
                        });
                    }); // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
                    dontRemove.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            } // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
        }else if(args[1] === 'bots') {
        let notArgs = new Discord.RichEmbed()
            .setTitle(':white_check_mark: Role Command.')
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role bots add <ROLE>**\nâ‍¥ \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\nâ‍¥ \`\`For delete the role from all bots.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL) // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs);
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);
                if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);
 
                let botsSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\nâœ… = Sure, give him the role.\n\nâ‌ژ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(botsSure).then(msg => {
                    msg.react('âœ…').then(() => msg.react('â‌ژ')) // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
 
                    let giveHim = (reaction, user) => reaction.emoji.name === 'âœ…'  && user.id === message.author.id;
                    let dontGiveHim = (reaction, user) => reaction.emoji.name === 'â‌ژ' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
                                message.guild.member(b).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontGive.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') { // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);
                if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);
 
                let botsSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\nâœ… = Sure, remove the role from him.\n\nâ‌ژ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(botsSure).then(msg => {
                    msg.react('âœ…').then(() => msg.react('â‌ژ'))
 
                    let removeRole = (reaction, user) => reaction.emoji.name === 'âœ…'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === 'â‌ژ' && user.id === message.author.id;
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
                                message.guild.member(b).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontRemove.on('collect', r => { // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }
        }else if(args[1] === 'all') { // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
            let notArgs = new Discord.RichEmbed()
            .setTitle(':white_check_mark: Role Command.')
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role all add <ROLE>**\nâ‍¥ \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\nâ‍¥ \`\`For delete the role from all.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs);
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`); // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
                let allSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\nâœ… = Sure, give all the role.\n\nâ‌ژ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(allSure).then(msg => {
                    msg.react('âœ…').then(() => msg.react('â‌ژ'))
 
                    let giveAll = (reaction, user) => reaction.emoji.name === 'âœ…'  && user.id === message.author.id;
                    let dontGiveAll = (reaction, user) => reaction.emoji.name === 'â‌ژ' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveAll, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {
                                message.guild.member(m).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);
                                }, 10000) // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
                            });
                        });
                    });
                    dontGive.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
                let allSure = new Discord.RichEmbed() // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\nâœ… = Sure, remove the role from him.\n\nâ‌ژ = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(allSure).then(msg => {
                    msg.react('âœ…').then(() => msg.react('â‌ژ'))
 
                    let removeRole = (reaction, user) => reaction.emoji.name === 'âœ…'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === 'â‌ژ' && user.id === message.author.id; // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {
                                message.guild.member(m).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontRemove.on('collect', r => { // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    }); // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
                })
            } // ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆظˆط¯ط² Alpha Codes.
        }
    }
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	client.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('http://live-timely-4jepdssgmc.time.ly/wp-content/uploads/2018/08/welcomeEvents.jpg') //ظ‡ظ†ط§ ط­ط· ط§ظ„طµظˆط±ظ‡ ط§ظ„ظٹ طھط¨ظٹظ‡ط§
    .setTitle('ط¹ط¶ظˆ ط¬ط¯ظٹط¯!')
    .setDescription('ظ…ط±ط­ط¨ط§ ط¨ظƒ ظپظٹ ط³ظٹط±ظپط±ظ†ط§')
    .addField(' ًں‘¤  ط§ظ†طھ ط§ظ„ط¹ط¶ظˆ ط±ظ‚ظ…',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', 'general') // ظ‡ظ†ط§ ط­ط· ط§ط³ظ… ط§ظ„ط±ظˆظ… ط§ظ„ظٹ طھط¨ظٹظ‡ ظٹظƒطھط¨ ظپظٹظ‡
    if (!channel) return;
    channel.send({embed : embed});
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	client.on('message', message => {
const prefix = "=";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return;
         if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ظ„ظٹط³ ظ„ط¯ظٹظƒ طµظ„ط§ط­ظٹط§طھ');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.reply("ظ…ظ†ط´ظ† ط´ط®طµ");
  if (!message.guild.member(user)
  .bannable) return message.reply("ظ„ط§ ظٹظ…ظƒظ†ظ†ظٹ ط·ط±ط¯ ط§ط­ط¯ ط§ط¯ط§ط±ط© ط§ظ„ط³ظٹط±ظپط±");
 
  message.guild.member(user).kick(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("Reason:", `[ + طھظ… ط·ط±ط¯ظ‡ ظ…ظ† ط§ظ„ط³ظٹط±ظپط± +  ]`)
  client.channels.get("495222310131990539").send({embed : banembed})
}
});
	
	
	
	
	
	
	
	
	
	
	
	
	

	client.on('message', message => {

    if (message.content === "ظ‚ظپظ„") {
                        if(!message.channel.guild) return message.reply(' ظ‡ط°ط§ ط§ظ„ط§ظ…ط± ظپظ‚ط· ظ„ظ„ط³ظٹط±ظپط±ط§طھ !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ظ„ظٹط³ ظ„ط¯ظٹظƒ طµظ„ط§ط­ظٹط§طھ');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("طھظ… طھظ‚ظپظٹظ„ ط§ظ„ط´ط§طھ âœ… ")
           });
             }
if (message.content === "ظپطھط­") {
    if(!message.channel.guild) return message.reply(' ظ‡ط°ط§ ط§ظ„ط§ظ…ط± ظپظ‚ط· ظ„ظ„ط³ظٹط±ظپط±ط§طھ !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ظ„ظٹط³ ظ„ط¯ظٹظƒ طµظ„ط§ط­ظٹط§طھ');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("طھظ… ظپطھط­ ط§ظ„ط´ط§طھâœ…")
           });
             }



});
	
	
	
	
	
	
	
	
	
	
	
	client.on('message', message => {
    if (message.content.startsWith("=avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('name bot',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});
	
	
	
	
	
	
	
	
	
	
	
	

 

	

	
	
	
	
	
	
	
	
 
 client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ط¶ط¹ ط¹ط¯ط¯ ط§ظ„ط±ط³ط§ط¦ظ„ ط§ظ„طھظٹ طھط±ظٹط¯ ظ…ط³ط­ظ‡ط§ ًں‘Œ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nط¹ط¯ط¯ ط§ظ„ط±ط³ط§ط¦ظ„ ط§ظ„طھظٹ طھظ… ظ…ط³ط­ظ‡ط§: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});










client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();//kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: ظ„ط§ ظٹظ…ظƒظ† ط¢ط¹ط·ط§ط، ظ…ظٹظˆطھ ظ„ط§ط¯ط§ط±ط© ط§ظ„ط³ظٹط±ظپط±**`); //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **ظ„ظ… ظٹط°ظƒط± ظ„ظ…ط§ط°ط§** ] ";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**طھظ… ط¢ط¹ط·ط§ط¦ظƒ ظ…ظٹظˆطھ**')
    .addField('**__ط§ظ„ط³ظٹط±ظپط±__**',[ message.guild.name ]) //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
    .addField('**__طھظ… ط¢ط¹ط·ط§ط¦ظƒ ظ…ظٹظˆطھ ط¨ظˆط§ط³ط·ط©__**', [ message.author ])
    .addField('**__ط¢ظ„ط³ط¨ط¨__**',reason)
    .addField('**__ظˆظ‚طھ ط§ظ„ظ…ظٹظˆطھ__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} ظ„ظ‚ط¯ طھظ… ظپظƒ ط§ظ„ظ…ظٹظˆطھ ط¹ظ†ظ‡ ظ…ط³ط¨ظ‚ط§**`)
 
  await kinggamer.removeRole(role) //kinggamer ط­ظ‚ظˆظ‚ ط§ظ„ظپط§ ظƒظˆط¯ط² ظˆ
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});


	
	
	
	
	

	
	
	
	
	
	

client.on('ready', () => {
     client.user.setActivity("Dant Bot",{type: 'PLAYING'});

});













client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Dant Bot`,"https://www.twitch.tv/settings/profile")
  console.log('')
  console.log('')
  console.log('â•”[â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ]â•—')
  console.log(`[Start] ${new Date()}`);
  console.log('â•ڑ[â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ]â•‌')
  console.log('')
  console.log('â•”[â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ]â•—');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('â•ڑ[â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ]â•‌')
  console.log('')
  console.log('â•”[â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ]â•—')
  console.log(' Bot Is Online')
  console.log('â•ڑ[â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ]â•‌')
  console.log('')
  console.log('')
});


	





	









  client.on('message', message => {
    var prefix = "="
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'me')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |ًں’¤.";
}
if (z.bot) {
var w = 'ط¨ظˆطھ';
}else {
var w = 'ط¹ط¶ظˆ';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('ًں”±| ط§ط³ظ…ظƒ:',`**<@` + `${z.id}` + `>**`, true)
.addField('ًں›،| ط§ظٹط¯ظٹ:', "**"+ `${z.id}` +"**",true)
.addField('â™¨| Playing:','**'+y+'**' , true)
.addField('ًں¤–| ظ†ظˆط¹ ط­ط³ط§ط¨ظƒ:',"**"+ w + "**",true)    
.addField('ًں“›| ط§ظ„ظƒظˆط¯ ط­ظ‚ ط­ط³ط§ط¨ظƒ:',"**#" +  `${z.discriminator}**`,true)
.addField('**ط§ظ„طھط§ط±ظٹط­ ط§ظ„ط°ظٹ ط§ظ†ط´ط¦ ظپظٹظ‡ ط­ط³ط§ط¨ظƒ | ًں“† **: ' ,year + "-"+ month +"-"+ day)    
.addField("**طھط§ط±ظٹط® ط¯ط®ظˆظ„ظƒ ظ„ظ„ط³ظٹط±ظپط±| âŒڑ   :**", message.member.joinedAt.toLocaleString())    

.addField('**âŒڑ | طھط§ط±ظٹط® ط§ظ†ط´ط§ط، ط­ط³ط§ط¨ظƒ ط§ظ„ظƒط§ظ…ظ„:**', message.author.createdAt.toLocaleString())
.addField("**ط§ط®ط± ط±ط³ط§ظ„ط© ظ„ظƒ | ًں’¬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ط¶ط¹ ط§ظ„ظ…ظٹظ†ط´ط§ظ† ط¨ط´ظƒظ„ طµط­ظٹط­  â‌Œ **').catch(console.error);

}

});










	

client.on('message', julian => {
var prefix = "=";
                        let args = julian.content.split(" ").slice(1).join(" ")
if(julian.content.startsWith(prefix + 'cc')) {
    if(!args) return julian.channel.send('`ظٹط±ط¬ظٹ ط§ط®طھظٹط§ط± ظƒظ… ظ„ظˆظ† `');
             if (!julian.member.hasPermission('MANAGE_ROLES')) return julian.channel.sendMessage(':no_entry: | You dont have **MANAGE_ROLES** Permission!'); 
              julian.channel.send(`**âœ… |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            julian.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
	
	

	
	








	











client.login('NTE1MTUyMzE2MDY0NTk1OTg3.DthB7Q.1bw2Au47nikGRv_7xIXDKI6P77Q');
