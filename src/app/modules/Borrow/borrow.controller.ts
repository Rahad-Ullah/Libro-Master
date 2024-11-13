import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/sendResponse";
import { borrowRecordServices } from "./borrow.service";

// create a new borrow
const createBorrow = catchAsync(async (req, res) => {
  const result = await borrowRecordServices.createBorrowIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Book borrowed successfully",
    data: result,
  });
});

export const borrowRecordControllers = {
  createBorrow,
};
