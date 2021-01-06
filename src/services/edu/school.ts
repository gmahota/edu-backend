
import School  from '../../models/edu/school'
import SchoolRepository  from '../../repository/edu/schoolRepository'


const getById = (id:string) =>
    SchoolRepository.findById(id)

const getAll = () =>
    SchoolRepository.findAll()


const create = (School:School) =>
  SchoolRepository.create(School)

const getByPhoneNumber= (phoneNumber:string) =>
    SchoolRepository.findByPhoneNumber(phoneNumber)

export default {
  getAll,
  getById,
  create,
  getByPhoneNumber
}