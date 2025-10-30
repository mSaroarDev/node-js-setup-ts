import app from "./app";
import configs from "./configs/configs";

async function startServer() {
  try {
    // db connection

    app.listen(3000, () => {
      console.log(`🚚 App running on port ${configs.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();