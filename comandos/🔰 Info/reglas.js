const Discord = require('discord.js');

module.exports = {
  name: "reglas", 
  alias: [""], 
  desc: "Sirve para ver las reglas del server",
  run: async (client, message, args, prefix) => {

  const embedReglas = new Discord.MessageEmbed()
  .setTitle(`Reglas por __${client.user.tag}__`)
  .setDescription(`📣ESTAS SON LAS REGLAS DEL SERVER:

⛔ __NO SEAS TÓXICO__
    
⛔ __RESPETAR A TODOS LOS MIEMBROS DEL SERVER__
    
⛔ __NO ESCRIBIR PALABRAS OFENSIVAS EN EL CHAT__
    
⛔ __NO HABLAR PALARAS OFENSIVAS EN LOS CHATS DE VOZ__
    
** !GRACIAS POR TU ATENCIÓN, ESPERO QUE CUMPLAS CON LAS REGLAS¡ **`)
  .setColor("0003FF")
  .setFooter({text: `©EmiBOT | 2022`, iconURL: `https://lh3.googleusercontent.com/sZ1VxXPigpCDhByRG3EeM0c4iFDVA7pwdifeu4E39K2IaMWqGn4Xr2JZ-Fp_-0m9UT4_=s92`})
  .setThumbnail(message.guild.iconURL({dynamic: true}))

  message.channel.send({ embeds: [embedReglas] })

 }

} 
