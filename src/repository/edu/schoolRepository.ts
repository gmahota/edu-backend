import School from "../../models/edu/school";
import { getRepository,getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<School> {
  const SchoolRepository = getRepository(School);

  const school: School = await SchoolRepository.findOneOrFail({
      where: {id: id }
    });

  return school;
};

const findAll = async function findAll(): Promise<School[]> {
  const SchoolRepository = getRepository(School);

  const Schools: School[] = await SchoolRepository.find({
    order: {
      id: "DESC",
    },
  });

  return Schools;
}

const findByPhoneNumber = async function findByPhoneNumber(phoneNumber: string): Promise<School> {
  const SchoolRepository = getRepository(School);

  const school: School = await SchoolRepository.findOneOrFail({
      where: {phoneNumber: phoneNumber }
    });

  return school;
};

const create = async function create(
  school: School
): Promise<School> {
  const SchoolRepository = getRepository(School);

  await SchoolRepository.save(school);

  return school;
};

export default {
  create,
  findAll,
  findById,
  findByPhoneNumber
};
