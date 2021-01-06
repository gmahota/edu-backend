
import Teacher  from '../../models/base/teacher'
import TeacherRepository  from '../../repository/base/teacherRepository'


const getById = (id:string) =>
    TeacherRepository.findById(id)

const getAll = () =>
    TeacherRepository.findAll()


const create = (Teacher:Teacher) =>
  TeacherRepository.create(Teacher)

const getByPhoneNumber= (phoneNumber:string) =>
    TeacherRepository.findByPhoneNumber(phoneNumber)

export default {
  getAll,
  getById,
  create,
  getByPhoneNumber
}