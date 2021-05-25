const Commando = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class PlayCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'play',
			description: 'Toca uma música do youtube',
			group: 'music',
			memberName: 'play',
			argsType: 'single',
			aliases: ['p'],
		});
	}
	async run(msg, args) {
		if (!args) {
			msg.reply('Especifique uma música ou url do youtube');
			return;
		}
		const youtube = require('../../music/youtube');

		if (msg.member.voice.channel && youtube) {
			const { title, author, url, bestThumbnail } = await youtube(msg, args);

			const embed = new Discord.MessageEmbed()
				.setTitle(`Tocando agora: \n\`${title}\``)
				.setURL(url)
				.setAuthor(msg.guild.name)
				.setColor('RED')
				.setThumbnail(bestThumbnail.url)
				.setFooter(author.name, author.bestAvatar.url);

			await msg.channel.send(embed);
		}
	}
};
