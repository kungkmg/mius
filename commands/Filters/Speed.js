const { EmbedBuilder } = require('discord.js');

module.exports = { 
    config: {
        name: "speed",
        description: "Sets the speed of the song.",
        category: "Filters",
		accessableby: "Member",
		usage: '<speed>',
	},
	run: async (client, message, args) => {
		const msg = await message.reply(`Loading please wait....`);

		const player = client.manager.players.get(message.guild.id);
		if(!player) return msg.edit(`No playing in this guild!`);
		const { channel } = message.member.voice;
		if (!channel || message.member.voice.channel !== message.guild.members.me.voice.channel) return msg.edit(`I'm not in the same voice channel as you!`);

		if (isNaN(args[0])) return msg.edit(`Please enter a number!`);
		if(args[0] > 10 || args[0] < 0) return msg.edit(`Please enter a number between 0 - 10!`);

		const data = {
			op: 'filters',
			guildId: message.guild.id,
			timescale: { speed: args[0] },
		}

		await player.send(data);

		const embed = new EmbedBuilder()
			.setDescription(`\`💠\` | *Speed set to:* \`${args[0]}\``)
			.setColor(client.color);
			
		await delay(5000);
		msg.edit({ content: " ", embeds: [embed] });
	}
};

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}