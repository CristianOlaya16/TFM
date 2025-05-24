const config = {
    user: process.env.DB_USER, // Usa variables de entorno para seguridad
    password: process.env.DB_PASSWORD,
    server: "srvbigdata.database.windows.net",
    database: "TFM - TelcoMadrid",
    options: { encrypt: true }
};

module.exports = config;
