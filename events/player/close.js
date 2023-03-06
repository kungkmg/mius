module.exports = async (client, name, code, reason) => {
    console.warn(`เชื่อมต่อnode | ${name}: Closed, Code ${code}, Reason ${reason || 'No reason'}`);
}