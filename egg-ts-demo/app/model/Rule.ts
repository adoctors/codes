module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('recurrent_voice');

  const RuleSchema = new Schema({
    语义点: {
      type: String,
    },
    Positive: {
      type: String,
    },
    Negative: {
      type: String,
    },
    互斥: {
      type: String,
    },
    Speaker: {
      type: String,
    },
    Context: {
      type: String,
    },
  });

  return conn.model('Rule', RuleSchema);
};