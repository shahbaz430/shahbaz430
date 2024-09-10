const { Sequelize } = require("sequelize");
require("dotenv").config();
const toBool = x => x === "true";
const DATABASE_URL = process.env.DATABASE_URL || "./database.db";
module.exports = {
 SESSION_ID: process.env.SESSION_ID || "Session~2dMc5R07"
 BOT_INFO: process.env.BOT_INFO || "Mr.Shahbaz",
 SUDO: process.env.SUDO || "923323156609",
 LOGS: toBool(process.env.LOGS) || true,
 ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
 LANG: process.env.LANG || "EN",
 HANDLERS: process.env.HANDLER === "false" || process.env.HANDLER === "null" ? "^" : "[.]",
 BRANCH: "master",
 WARN_COUNT: 3,
 AUTHOR: process.env.AUTHOR || "Mr.Shahbaz",
 PACKNAME: process.env.PACKNAME || "Mr.Shahbaz",
 WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
 GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
 ANTILINK: toBool(process.env.ANTI_LINK) || false,
 HEROKU: toBool(process.env.HEROKU) || false,
 AUTO_READ: toBool(process.env.AUTO_READ) || false,
 RMBG_KEY: process.env.RMBG_KEY || false,
 AUTO_STATUS_READ: toBool(process.env.AUTO_STATUS_READ) || true,
 WORK_TYPE: process.env.WORK_TYPE || "private",
 DELETED_LOG: toBool(process.env.DELETED_LOG) || false,
 DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
 REMOVEBG: process.env.REMOVEBG || "",
 DATABASE_URL: DATABASE_URL,
 STATUS_SAVER: toBool(process.env.STATUS_SAVER) || true,
 HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
 HEROKU_API_KEY: process.env.HEROKU_API_KEY,
 DATABASE:
  DATABASE_URL === "./database.db"
   ? new Sequelize({
      dialect: "sqlite",
      storage: DATABASE_URL,
      logging: false,
     })
   : new Sequelize(DATABASE_URL, {
      dialect: "postgres",
      ssl: true,
      protocol: "postgres",
      dialectOptions: {
       native: true,
       ssl: { require: true, rejectUnauthorized: false },
      },
      logging: false,
     }),
};
