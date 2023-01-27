import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-inicq2e-shard-00-00.pobxhwt.mongodb.net:27017,ac-inicq2e-shard-00-01.pobxhwt.mongodb.net:27017,ac-inicq2e-shard-00-02.pobxhwt.mongodb.net:27017/?ssl=true&replicaSet=atlas-o7r4ln-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;