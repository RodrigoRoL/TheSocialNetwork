const mongoose = require('mongoose');
// Connecting to the MongoDB database
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/socialnetworkdb',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// Exporting the connection 
module.exports = mongoose.connection