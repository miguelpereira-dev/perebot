const dispatcherMain = require('./__dispatcher');
const ytdl = require('ytdl-core');

const Discord = require('discord.js');

module.exports = {
	commands: ['play', 'p'],
	permissionError: 'You do not have permission to use this command.',
	minArgs: 1,
	callback: async (message, args, text) => {
		if (message.member.voice.channel && ytdl.validateURL(url)) {
			const connection = await message.member.voice.channel.join();

			
			await dispatcherMain(connection, url);
		}
	},
};
