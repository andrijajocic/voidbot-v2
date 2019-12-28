const fs = require("fs");
const MongoClient = require("mongodb");
const assert = require("assert");

const url = "mongodb://localhost.27017/voidbot-v2";

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected to database.");
    db.close();
});