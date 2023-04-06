const Discord = require('discord.js');
const config = require('./config/config.json')
require('colors')
const client = new Discord.Client({
    restTimeOffset: 0,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    ],
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = config.color;

function requerirhandlers(){
    ["command", "events", "distube", "reaccion_roles", "tickets"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        } catch(e){
            console.warn(e)
        }
    })
}
requerirhandlers();

///Presencia
client.on("ready", () => {
    console.log(`
╔═════════════════════════════════════════════════════╗
║                                                     ║
║                 Presencia lista!                    ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`.yellow)
    client.user.setActivity('EmiBOT.gg | !help', { type: 'PLAYING'})
  })

///Bienvenidas
client.on('guildMemberAdd', (member) => {

    if(member.guild.id === '789609651422494741'){
    
    const embed = new Discord.MessageEmbed()
  
    .setTitle('Welcome to EMIGENIOS!')
    .setDescription(`Bienvenid@ **${member.user.username}** al server y espero que te guste, recuerda que gracias a ti ya somos \`${member.guild.memberCount}\`!`)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .setImage('https://media.giphy.com/media/Dr7gW5T6aKEiwgjZxv/giphy.gif')
    .setFooter({ text: "Gracias por unirte, la pasaras bien!" })
    .setColor("0003FF")
  
  client.channels.cache.get("945443825537679371").send({ embeds: [embed] })
   }
   })

///Verificación
client.on("messageCreate", message => {
    if(message.channel.id === "947582400114884608"){
      if(message.author.bot) return;
      
      if(message.content === 'Verificame'){
        message.member.roles.add("947603876419366963");
        message.author.send("Gracias por verificarte");
        message.delete();
      }
      else{
        message.author.send("Tienes problemas? Habla con un admin.");
        message.delete();
      }
    }
  });

client.login(config.token).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO -[X]-`.red))