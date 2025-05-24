const sql = require("mssql");

module.exports = async function (context, req) {
    const config = {
        user: "estudiante",
        password: "Examen@2024",
        server: "srvbigdata.database.windows.net",
        database: "TFM - TelcoMadrid",
        options: { encrypt: true }
    };

   try {
        await sql.connect(config);

        // Obtener el último id_ticket
        const result = await sql.query`SELECT MAX(id_ticket) AS ultimo_id FROM reporte_soporte`;
        const nuevo_id = result.recordset[0].ultimo_id + 1;

        context.res = { body: { nuevo_id } };
    } catch (err) {
        context.res = { status: 500, body: err.message };
    }
};
