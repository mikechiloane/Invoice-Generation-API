const dbInstance = require('../Config/database.connection');
const sequelize = require('sequelize');
const { Model } = require('sequelize');

const Quotation =  dbInstance.define(
    "qoutation",{
        quote_id:{
            type: sequelize.INTEGER,
            autoIncrement:true,
            allowNull: false,
            primaryKey: true
        },
        client:{
            type:sequelize.STRING,
            allowNull:false
            
        },
        total:{
            type: sequelize.STRING,
            allowNull:false
        },
        amount:{
            type: sequelize.FLOAT,
            allowNull:false
        }
        ,
        description:{ 
            type:sequelize.STRING,
            allowNull:false,
        }
    }
)

// Quotation.sync({force:true})


module.exports = Quotation;