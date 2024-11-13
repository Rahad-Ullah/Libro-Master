import { BorrowRecord } from "@prisma/client";
import prisma from "../../../utils/prisma";
import { calculateOverdueBooks } from "../../../utils/calculateOverdueBooks";

// borrow a book
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

  const result = await prisma.$transaction(async (transactionClient) => {
    const borrowData = await transactionClient.borrowRecord.create({
      data: payload,
    });

    // decrease available copies by 1
    await transactionClient.book.update({
      where: {
        bookId: payload.bookId,
      },
      data: {
        availableCopies: bookData.availableCopies - 1,
      },
    });

    return borrowData;
  });

  return result;
};

// get overdue borrow books
const getOverdueBorrowBooksFromBD = async () => {
  const borrowRecords = await prisma.borrowRecord.findMany({
    include: {
      book: {
        select: {
          title: true,
        },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });

  // Filter overdue records and calculate overdue days
  const overdueRecords = calculateOverdueBooks(borrowRecords);

  return overdueRecords;
};

// return book
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

  const bookData = await prisma.book.findUnique({
    where: {
      bookId: borrowData.bookId,
    },
  });

  const result = await prisma.$transaction(async (transactionClient) => {
    // return the book
    const returnData = await transactionClient.borrowRecord.delete({
      where: {
        borrowId,
      },
    });

    // increase available copies by 1
    await transactionClient.book.update({
      where: {
        bookId: bookData?.bookId,
      },
      data: {
        availableCopies: bookData?.availableCopies! + 1,
      },
    });

    return borrowData;
  });

  return result;
};

export const borrowRecordServices = {
  borrowBookIntoDB,
  returnBookIntoDB,
  getOverdueBorrowBooksFromBD,
};
