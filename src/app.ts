import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import { loadEnv, connectDb, disconnectDB } from "@/config";
import { authenticationRouter, enrollmentsRouter } from "@/routers";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .get("/health", (_req, res) => res.send("Status da aplicação: ✅ Em execução"))
  .use("/auth", authenticationRouter)
  .use("/enrollment", enrollmentsRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
