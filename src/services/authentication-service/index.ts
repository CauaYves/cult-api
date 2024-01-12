import { loginAccess } from "@/protocols";
import { exclude } from "@/utils/prisma-utils";
import accessRepository from "@/repositories/access-repositories";
import sessionRepository from "@/repositories/session-repository";
import { notFoundError, unauthorizedError } from "@/errors";
import jwt from "jsonwebtoken";

const expiresTimeToken = "30d";

async function makeAccess(login: loginAccess) {
  const codeSearch = await accessRepository.getLogin({ code: login.code });
  if (!codeSearch) {
    throw notFoundError();
  }
  if (login.code !== codeSearch.code || login.password !== codeSearch.password) {
    throw unauthorizedError();
  }
  const token = await createSession(codeSearch.id);
  return {
    user: exclude(codeSearch, "password"),
    token,
  };
}

async function createSession(codeId: number) {
  const existingSession = await sessionRepository.getSessionByCodeId(codeId);

  const token = jwt.sign({ codeId }, process.env.JWT_SECRET, { expiresIn: expiresTimeToken });

  if (existingSession) {
    await sessionRepository.updateSessionToken(existingSession.id, token);
  } else {
    await sessionRepository.create({
      token,
      codeId,
    });
  }
  return token;
}

async function refreshToken(codeId: number) {
  const existingSession = await sessionRepository.getSessionByCodeId(codeId);
  const token = jwt.sign({ codeId }, process.env.JWT_SECRET, { expiresIn: expiresTimeToken });
  await sessionRepository.updateSessionToken(existingSession.id, token);
  return token;
}
const accessService = {
  makeAccess,
  refreshToken,
};
export default accessService;
