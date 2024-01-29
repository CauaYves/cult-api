import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { z } from "zod";

export function loadEnv() {
  const path =
    process.env.NODE_ENV === "test"
      ? ".env.test"
      : process.env.NODE_ENV === "development"
        ? ".env.development"
        : ".env";

  const currentEnvs = dotenv.config({ path });
  dotenvExpand.expand(currentEnvs);
}

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.string(),
  JWT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
