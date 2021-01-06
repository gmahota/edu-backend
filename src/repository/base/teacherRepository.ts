import Teacher from "../../models/base/teacher";
import { getRepository,getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<Teacher> {
  const TeacherRepository = getRepository(Teacher);

  const teacher: Teacher = await TeacherRepository.findOneOrFail({
      where: {id: id }
    });

  return teacher;
};

const findAll = async function findAll(): Promise<Teacher[]> {
  const TeacherRepository = getRepository(Teacher);

  const Teachers: Teacher[] = await TeacherRepository.find({
    order: {
      phoneNumber: "ASC",
      id: "DESC",
    },
  });

  return Teachers;
}

const findByPhoneNumber = async function findByPhoneNumber(phoneNumber: string): Promise<Teacher> {
  const TeacherRepository = getRepository(Teacher);

  const teacher: Teacher = await TeacherRepository.findOneOrFail({
      where: {phoneNumber: phoneNumber }
    });

  return teacher;
};

const create = async function create(
  teacher: Teacher
): Promise<Teacher> {
  const TeacherRepository = getRepository(Teacher);

  await TeacherRepository.save(teacher);

  return teacher;
};

export default {
  create,
  findAll,
  findById,
  findByPhoneNumber
};
