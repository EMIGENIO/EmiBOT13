const Discord = require("discord.js");
const ascii = require("ascii-table");
const moment = require("moment");

moment.updateLocale('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
}
);
moment.locale('es');

module.exports = {
  name: "serverinfo",
  alias: ["server"],

  run: async (client, message, args, prefix) => {

  const owner = await message.guild.fetchOwner()
  const own = message.guild.members.cache.get(owner)

    let embed = new Discord.MessageEmbed()
  .addField("Nombre", `${message.guild.name}`)
  .addField("Id", `${message.guild.id}`)
  .addField("Creador", `${owner.user.tag}`)
  .setThumbnail(message.guild.iconURL({ dynamic: true}))
  .addField("Creacion", `${moment.utc(message.guild.createdAt).format('LLLL')} pm [${moment.utc(message.guild.createdAt).fromNow()}]`)
  .setColor("0003FF")
  .addField("Miembros", `${message.guild.memberCount}`)
  .addField("Roles", `${message.guild.roles.cache.size}`)
  

    message.channel.send({embeds: [embed]})

  }

};