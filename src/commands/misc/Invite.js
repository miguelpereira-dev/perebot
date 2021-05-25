const Commando = require('discord.js-commando');

module.exports = class AddCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'invite',
			description: 'Convida o bot',
			group: 'misc',
			memberName: 'invite',
			argsType: 'single',
		});
	}

	async run(msg) {
		this.client.generateInvite().then((link) => {
			msg.reply(link);
		});
	}
};
