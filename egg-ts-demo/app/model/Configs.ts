module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('recurrent_voice');

  const ConfigsSchema = new Schema({
    key: {
      type: String
    },
    contact_trial_emails: {
      type: [String]
    },
    business_keys: {
      type: [String]
    }
  });

  return conn.model("configs", ConfigsSchema);
};
