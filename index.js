import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routes/index.js";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import { startNgrok } from "./config/startWithNgrok.js";



dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando con MONGO correctamente ✅");
});

app.use("/api", apiRoutes);

app.use(errorHandler);

// Iniciar servidor


app.listen(PORT, async () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);

  if (process.env.NODE_ENV === "development") {
    const url = await startNgrok(PORT);
    if (url) {
      console.log(`🌐 Webhook URL: ${url}/api/webhook`); // Ajustá según ruta real
    }
  }

});

