module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('recurrent_voice');

  const CallsSchema = new Schema({
    bid: {
      type: Schema.Types.ObjectId
    },
    tid: {
      type: String
    },
    sid: {
      type: String
    },
    sname: {
      type: String
    },
    cname: {
      type: String
    },
    company_id: {
      type: String
    },
    company_name: {
      type: String
    },
    length: {
      type: Number
    }
  });

  return conn.model("Calls", CallsSchema);
};
