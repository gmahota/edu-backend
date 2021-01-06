import { Request, Response } from "express";
import SchoolService from "../../services/edu/school";
import School from "../../models/edu/school";

export const get_all_Schools = async (
  request: Request,
  response: Response,
) => {
  const School = await SchoolService.getAll();
  return response.status(200).json(School);
};

export const get_School = async (request: Request, response: Response) => {
  const { id } = request.params;

  const School = await SchoolService.getById(id);

  if (School) {
    return response.status(200).json(School);
  }
  return response.status(404).json(
    { msg: "no School with that id" },
  );
};

export const create_School = async (request: Request, response: Response) => {
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

    let School: School = {
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

    School = await SchoolService.create(School);

    return response.status(200).json(School);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a School with that i", error: e },
    );
  }
};

export const delete_School = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await Schoolervice.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a order with that i" },
    );
  }
};