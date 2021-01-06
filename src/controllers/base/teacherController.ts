import { Request, Response } from "express";
import TeacherService from "../../services/base/teacher";
import Teacher from "../../models/base/teacher";

export const get_all_teachers = async (
  request: Request,
  response: Response,
) => {
  const Teacher = await TeacherService.getAll();
  return response.status(200).json(Teacher);
};

export const get_teacher = async (request: Request, response: Response) => {
  const { id } = request.params;

  const Teacher = await TeacherService.getById(id);

  if (Teacher) {
    return response.status(200).json(Teacher);
  }
  return response.status(404).json(
    { msg: "no Teacher with that id" },
  );
};

export const create_teacher = async (request: Request, response: Response) => {
  const {
    name,
    address,
    city,
    province,
    district,
    phoneNumber,
    createAt,
    author,
    status
  } = await request.body;

  try {

    let Teacher: Teacher = {
      id: 0,
      name,
      address,
      city,
      province,
      district,
      phoneNumber,
      status,
      createAt:new Date()
    };

    Teacher = await TeacherService.create(Teacher);

    return response.status(200).json(Teacher);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a Teacher with that i", error: e },
    );
  }
};

export const delete_teacher = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await Teacherervice.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a order with that i" },
    );
  }
};