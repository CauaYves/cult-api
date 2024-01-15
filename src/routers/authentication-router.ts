import { authenticateToken, validateBody } from "@/middlewares";
import { accessSchema } from "@/schemas";
import { Router } from "express";
import { Refresh, Signin, CheckToken } from "@/controllers";

const authenticationRouter = Router();

authenticationRouter.post("/", validateBody(accessSchema), Signin);
authenticationRouter.post("/refresh", authenticateToken, Refresh);
authenticationRouter.post("/check-token", authenticateToken, CheckToken);
export { authenticationRouter };
