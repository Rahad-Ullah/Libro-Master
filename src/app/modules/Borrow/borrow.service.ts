import { BorrowRecord } from "@prisma/client";
import prisma from "../../../utils/prisma";

const borrowBookIntoDB = async (payload: BorrowRecord) => {
  const memberData = await prisma.member.findUnique({
    where: {
      memberId: payload.memberId,
    },
  });

  // check if the member exists
  if (!memberData) {
    throw new Error("Invalid member ID");
  }

  const bookData = await prisma.book.findUnique({
    where: {
      bookId: payload.bookId,
    },
  });

  // check if the book exists
  if (!bookData) {
    throw new Error("Invalid book ID");
  }

  const result = await prisma.borrowRecord.create({
    data: payload,
  });

  return result;
};

const returnBookIntoDB = async (borrowId: string) => {
  const borrowData = await prisma.borrowRecord.findUnique({
    where: {
      borrowId,
    },
  });

  // check if the borrow data exists
  if (!borrowData) {
    throw new Error("Invalid borrow ID");
  }

  const result = await prisma.borrowRecord.delete({
    where: {
      borrowId,
    },
  });

  return result;
};

export const borrowRecordServices = {
  borrowBookIntoDB,
  returnBookIntoDB,
};