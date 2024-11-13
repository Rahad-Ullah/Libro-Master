import { Member } from "@prisma/client";
import prisma from "../../../utils/prisma";

const createMemberIntoDB = async (payload: Member) => {
  const memberData = await prisma.member.findUnique({
    where: {
      email: payload.email,
    },
  });

  // check if the member already exists
  if (memberData) {
    throw new Error(`This member already exists`);
  }

  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};

// retrieve all members
const getAllMembersFromDB = async () => {
  const result = await prisma.member.findMany()

  return result;
};

export const memberServices = {
  createMemberIntoDB,
  getAllMembersFromDB,
};
