//insert, remove, find, update
//analagous to CRUD

//insert
exports.insertDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.insertOne(document);
};

//find
exports.findDocuments = (db, collection) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

//remove
exports.removeDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document);
};

//update
exports.updateDocument = (db, document, update, collection) => {
    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update }, null);
};