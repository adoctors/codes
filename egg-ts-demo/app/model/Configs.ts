module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

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

  return mongoose.model("configs", ConfigsSchema);
};
