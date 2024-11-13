import catchAsync from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { bookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await bookServices.createBookIntoDB(req.body);
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Book created successfully",
    data: result,
  });
});

export const bookControllers = {
  createBook,
};
