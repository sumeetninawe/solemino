/**
 * DB = Database management class. Class to manage all core database operations.
 */

const DB = {};
const config = require('./../config');
const mongoClient = require('mongodb').MongoClient;
const dburl = config.dburl;

//SessionValidator
DB.createSessionRecord = () => {
    /*mongoClient.connect(dburl, (err, db) => {
        if (err) throw err;
        let dbo = db.db("nowclidb");
        var instanceobj = {
            instancename: "dev67107",
            username: "admin",
            password: "admin"
        };

        dbo.collection("instance").insertOne(instanceobj, (err, res) => {
            if (err) throw err;
            console.log('inserting');
            db.close();
        })
    });*/
}

DB.getSessionRecord = (cb) => {
    mongoClient.connect(dburl, (err, db) => {
        if (err) throw err;
        let dbo = db.db("nowclidb");
        var query = {};

        dbo.collection("instance").find(query).toArray((err, result) => {
            if(err) throw err;
            db.close();
            cb(result);
        });
    });
}

module.exports = DB;