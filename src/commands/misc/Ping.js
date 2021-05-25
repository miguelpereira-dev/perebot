const Commando = require('discord.js-commando');

module.exports = class AddCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			description: 'Mostra o ping do Bot',
			group: 'misc',
			memberName: 'ping',
			argsType: 'single',
		});
	}
	async run(msg, args) {
		msg.reply('Calculando ping...').then((resultMsg) => {
			resultMsg.delete();
			const ping = resultMsg.createdTimestamp - msg.createdTimestamp;

			msg.reply(
				`:ping_pong: Pong! - Latência do Bot: ${ping}, Latência da API: ${this.client.ws.ping}`
			);
		});
	}
};
