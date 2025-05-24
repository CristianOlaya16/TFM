const sql = require("mssql");
const config = require("./db-config");

module.exports = async function (context, req) {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT MAX(id_ticket) AS ultimo_id FROM reporte_soporte`;
        const nuevo_id = result.recordset[0].ultimo_id + 1;
        context.res = { body: { nuevo_id } };
    } catch (err) {
        context.res = { status: 500, body: err.message };
    }
};

