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

// retrieve all members
const getSingleMemberFromDB = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId
    }
  })

  return result;
};

// update single member
const updateMemberIntoDB = async (memberId: string, payload: Partial<Member>) => {
  const memberData = await prisma.member.findUnique({
    where: {
      memberId
    }
  })

  // check if member exists
  if(!memberData){
    throw new Error('Member does not exist')
  }

  const result = await prisma.member.update({
    where: {
      memberId
    },
    data: payload
  })

  return result;
};

// delete single member
const deleteMemberFromDB = async (memberId: string) => {
  const memberData = await prisma.member.findUnique({
    where: {
      memberId
    }
  })

  // check if member exists
  if(!memberData){
    throw new Error('Member does not exist')
  }

  const result = await prisma.member.delete({
    where: {
      memberId
    }
  })

  return result;
};

export const memberServices = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
