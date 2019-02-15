const Discord = require('discord.js');
    
const client = new Discord.Client();

var prefix = "§"

client.login(process.env.TOKEN)


client.on('guildMemberAdd', member => {
const welcomechanel = member.guild.channels.find((x) => x.id === '545666978606743552' );
let b_embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`Hey ${member.user.username} il nous a rejoint`)
return welcomechanel.send(b_embed)
})

client.on('guildMemberRemove', member => {
const welcomechanel = member.guild.channels.find((x) => x.id === '545666978606743552' );
let a_embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`Hey ${member.user.username} il nous a quitté`)
return welcomechanel.send(a_embed)
})

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("EarthMC")

});

client.on('message', async message => {

    if(message.content === "Bonjour"){
        message.reply("Salut")
        console.log("Le bot dit bonjour")
    }
    
    if(message.content === prefix + "aide") {
        var aide_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`:robot: Voici mes catégories d'aide !`)
        .setDescription(`Voici mes commandes disponible :`)
        .setThumbnail(message.author.avatarURL)
        .addField("Bonjour", "fait `Bonjour` et le bot te répond bonjour")
        .addField("§stats", "fait `§stats` et tu recois tes stats privée")
        .setFooter("EarthMC ")
        .setTimestamp()
        message.channel.send(aide_embed);
    }

});
