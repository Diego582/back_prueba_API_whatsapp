import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.LINK_DB);
    console.log("🟢 Conectado a MongoDB");
  } catch (error) {
    console.error("🔴 Error al conectar a MongoDB:", error.message);
    process.exit(1); // Detiene el servidor si falla la conexión
  }
};

export default connectDB;
