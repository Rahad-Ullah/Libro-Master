import { Book } from "@prisma/client";
import prisma from "../../../utils/prisma";
import AppError from "../../../utils/AppError";
import { StatusCodes } from "http-status-codes";

const createBookIntoDB = async (payload: Book) => {
  const bookData = await prisma.book.findFirst({
    where: {
      title: payload.title,
    },
  });

  // check if the book already exists
  if (bookData) {
    throw new AppError(StatusCodes.CONFLICT, `This book already exists`);
  }

  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

// retrieve all books
const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany();

  return result;
};

// retrieve single book by bookId
const getSingleBookFromDB = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  return result;
};

// update single book by bookId
const updateBookIntoDB = async (bookId: string, payload: Partial<Book>) => {
  const bookData = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!bookData) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Book does not exists");
  }

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data: payload,
  });

  return result;
};

// delete single book by bookId
const deleteBookFromDB = async (bookId: string) => {
  const bookData = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!bookData) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Book does not exist");
  }

  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });

  return result;
};

export const bookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB
};
