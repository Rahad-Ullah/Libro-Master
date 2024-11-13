import { Book } from "@prisma/client";
import prisma from "../../../utils/prisma";

const createBookIntoDB = async (payload: Book) => {
  const bookData = await prisma.book.findFirst({
    where: {
      title: payload.title,
    },
  });

  // check if the book already exists
  if (bookData) {
    throw new Error(`This book already exists`);
  }

  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

export const bookServices = {
  createBookIntoDB,
};
