module.exports = async (client, name, players, moved) => {
    if (moved) return;
    players.map(player => player.connection.disconnect())
    console.warn(`เชื่อมต่อnode | ${name}: Disconnected`);
}