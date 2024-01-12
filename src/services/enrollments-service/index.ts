import { getAddress } from "@/utils";
import { AddressEnrollment } from "@/protocols";
import { notFoundError } from "@/errors";

async function getAddressFromCEP(cep: string): Promise<AddressEnrollment> {
  const result = await getAddress(cep);

  if (!result) {
    throw notFoundError();
  }

  const { bairro, localidade, uf, complemento, logradouro } = result;

  const address = {
    bairro,
    cidade: localidade,
    uf,
    complemento,
    logradouro,
  };

  return address;
}

const enrollmentsService = {
  getAddressFromCEP,
};
export default enrollmentsService;
