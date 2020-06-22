module.exports = (app) => {
    const { STRING, DATE, INTEGER, BOOLEAN } = app.Sequelize;
    return app.model.define('staffs', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      role_key: STRING(30),
      email: STRING(60),
      status: { type: BOOLEAN, defaultValue: true },
      password: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    });
  };