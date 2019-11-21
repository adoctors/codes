module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('recurrent_voice');

  const Rule2Schema = new Schema({
    bid: Schema.Types.ObjectId,
    tid: String,
    name: String,
    positive: String,
    negative: String,
    mutex: String,
    speaker_type: String,
    produced_by_code: Boolean,
    atoi: Boolean,
    priority: Number,
    deleted: Boolean,
    category_id: Schema.Types.ObjectId,
    keywords: Array,
    rule_group_ids: Array,
    update_time: Date
  });

  return conn.model("Rule2", Rule2Schema);
};
