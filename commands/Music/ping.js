const { EmbedBuilder, } = require('discord.js');
const { version } = require('../../package.json')

module.exports = { 
    config: {
        name: "ping",
        aliases: ["ping", "p"],
        description: "Pause song in queue!",
        accessableby: "Member",
        category: "Music",
    },
    run: async (client, message, args) => {
        let msg = await message.channel.send({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: 'กรุณารอสักครู่', iconURL: 'https://cdn.discordapp.com/attachments/1048443514297532457/1051304130175574067/loading.gif'})
                    .setDescription(`เรากำลังโหลดข้อมูลจาก API`)
                    .setColor("#000080")
                    .setTimestamp()
                    .setFooter({ text: `KUNG - ขณะนี้บอทอยู่ในเวอร์ชั่น ${version} `, iconURL: 'https://cdn.discordapp.com/attachments/1051164894659084399/1082263731276357692/77f507fde8b10be4e767e34c51f618e2.jpg' })
            ]
        })
        const ping = new EmbedBuilder()
            .setAuthor({ name: '⌛ ความหน่วงของบอท ณ ขณะนี้!'})
            .setDescription(`เวลาในการตอบสนองข้อความ ${msg.createdTimestamp - message.createdTimestamp}ms\nเวลาในการตอบสนองของ API ${Math.round(client.ws.ping)}ms.`)
            .setColor("#000080")
            .setTimestamp()
            .setFooter({ text: `KUNG - ขณะนี้บอทอยู่ในเวอร์ชั่น ${version} `, iconURL: 'https://cdn.discordapp.com/attachments/1051164894659084399/1082263731276357692/77f507fde8b10be4e767e34c51f618e2.jpg' });


        setTimeout(function () {
            msg.edit({ embeds: [ping] });
        }, 10 /* ปรับดีเลย์เอาเอง หรือไม่ต้องใส่;ก็ได้*/);
    }
};