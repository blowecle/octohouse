const port = process.env.PORT || 3000;
const app = require('./app');
const conn = require('./db');

const init = async () => {
    // Uncomment the line below to reseed the database
    await conn.syncAndSeed();
    
    //listen on port
    app.listen(port, () => console.log(`listening on port ${port}`));
};

init();
