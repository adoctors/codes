module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('layev');

  const BusinessSchema = new Schema({
    name: String,
    master: String
  });

  return conn.model("Business", BusinessSchema);
};
