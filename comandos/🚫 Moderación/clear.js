const Discord = require('discord.js');

module.exports = {
  name: "clear", 
  aliases: ["c", "borrar", "eliminar"],
  desc: "Sirve para eliminar mensajes",
  run: async (client, message, args, prefix) => {

  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("No tienes permisos para elimiar mensages")

  const cantidad = args[0]

  if(!cantidad) return message.reply("Debes escribir una cantidad de mensajes a elminar")

  if(isNaN(cantidad)) return message.reply("Debes escribir una cantidad de mensajes para elminar")

  if(cantidad > 99) return message.reply("No puedes eliminar más de 99 mensajes a la vez")

  message.delete().then(q => {
    message.channel.bulkDelete(cantidad)
    const delete2 = new Discord.MessageEmbed()
    .setTitle(`Se han borrado **${cantidad}** mensajes correctamente 
Por: __${client.user.tag}__`)
    .setColor("0003FF")
    .setFooter({text: `©EmiBOT | 2022`, iconURL: `https://lh3.googleusercontent.com/sZ1VxXPigpCDhByRG3EeM0c4iFDVA7pwdifeu4E39K2IaMWqGn4Xr2JZ-Fp_-0m9UT4_=s92`})

    message.channel.send({ embeds: [delete2] })
  })
  

  

 }

} 