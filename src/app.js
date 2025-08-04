import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import registerModules from "./modules/index.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan("dev"))
app.use(express.json())

// Registrar todos los módulos
registerModules(app)

app.get("/", (req, res) => {
  res.send("API de Sistema BayWatch funcionando!")
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
// console.log('Puto');
