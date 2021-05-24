const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URI;

module.exports = () => {
	mongoose.connect(DB_URI, { useNewUrlParser: true });
    const connection = mongoose.connection;
    
    connection.on('error', err => console.error(err))
    connection.once('open', () => console.error('Conecção bem-sucedida'))
};
