const {Sequelize} = require("sequelize");


const dbInstance = new Sequelize(
    'quote_generator',
    'root',
    '', {
    host: 'localhost',
    dialect: "mysql"
}
);

dbInstance.authenticate().then(() => {
        console.log("Connection has been extablished:Quote Generator")
    }).catch((err) => {
        console.error("Unnable to connect to the db: ", err)
    });



module.exports = dbInstance;
