db.createCollection("users");

db.users.drop()

db.users.insertOne({"name": "Rbeya Hridi", "position": "Developer"});

db.users.deleteOne({"name": "Rabeya Hridi"})
  