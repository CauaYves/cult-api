import { prisma } from "@/config";
import { SessionParams } from "@/protocols";

async function create(data: SessionParams) {
  return prisma.session.create({
    data,
  });
}

async function updateSessionToken(sessionId: number, newToken: string) {
  return prisma.session.update({
    where: { id: sessionId },
    data: { token: newToken },
  });
}

async function getSessionByCodeId(codeId: number) {
  return prisma.session.findUnique({
    where: { codeId },
  });
}

const sessionRepository = {
  create,
  updateSessionToken,
  getSessionByCodeId,
};

export default sessionRepository;
