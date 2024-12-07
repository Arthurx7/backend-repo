const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 3001;

const pool = new Pool({
    user: "postgres", 
    host: "db",
    database: "gestion_libros",
    password: "Trocha2004", 
    port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.get("/libros", async (req, res) => {
    const result = await pool.query("SELECT * FROM libros");
    res.json(result.rows);
});

app.post("/libros", async (req, res) => {
    const { nombre } = req.body;
    const result = await pool.query("INSERT INTO libros (nombre) VALUES ($1) RETURNING *", [nombre]);
    res.json(result.rows[0]);
});

app.put("/libros/:id", async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    const result = await pool.query("UPDATE libros SET nombre = $1 WHERE id = $2 RETURNING *", [nombre, id]);
    res.json(result.rows[0]);
});

app.delete("/libros/:id", async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM libros WHERE id = $1", [id]);
    res.json({ message: "Libro eliminado" });
});

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));