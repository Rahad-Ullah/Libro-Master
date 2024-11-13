import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/sendResponse";
import { borrowRecordServices } from "./borrow.service";

// borrow a book
const borrowBook = catchAsync(async (req, res) => {
  const result = await borrowRecordServices.borrowBookIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Book borrowed successfully",
    data: result,
  });
});

// return a book
const returnBook = catchAsync(async (req, res) => {
    const {borrowId} = req.body
    
    const result = await borrowRecordServices.returnBookIntoDB(borrowId)
  
    sendResponse(res, {
      success: true,
      status: StatusCodes.OK,
      message: "Book returned successfully",
    });
  });

export const borrowRecordControllers = {
  borrowBook,
  returnBook,
};
