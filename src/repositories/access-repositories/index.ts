import { prisma } from "@/config";
import { loginAccess } from "@/protocols";

export type UserCode = Pick<loginAccess, "code">;

async function getLogin(codeParam: UserCode) {
  const { code } = codeParam;
  return prisma.login.findFirst({
    where: { code },
  });
}

const accessRepository = {
  getLogin,
};

export default accessRepository;
