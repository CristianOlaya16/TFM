const sql = require("mssql");

module.exports = async function (context, req) {
    const config = {
        user: "estudiante",
        password: "Examen@2024",
        server: "srvbigdata.database.windows.net",
        database: "TFM - TelcoMadrid",
        options: { encrypt: true }
    };

    if (req.method === "GET") {
        // Obtener el último ID de la base de datos
        try {
            await sql.connect(config);
            const result = await sql.query`SELECT MAX(id_ticket) AS ultimo_id FROM tickets`;
            const nuevo_id = result.recordset[0].ultimo_id + 1;
            context.res = { body: { nuevo_id } };
        } catch (err) {
            context.res = { status: 500, body: err.message };
        }
    }
};
