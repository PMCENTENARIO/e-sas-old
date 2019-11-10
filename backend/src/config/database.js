require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  plugin: 'mysql_native_password',
  host: process.env.DB_HOST,
  username: process.env.BD_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true, // cria modelo nome tabela »» nome_tabela
    underscoredAll: true,
  },
};
