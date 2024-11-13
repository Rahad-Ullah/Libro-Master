import catchAsync from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { bookServices } from "./book.service";

// create a new book
const createBook = catchAsync(async (req, res) => {
  const result = await bookServices.createBookIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Book created successfully",
    data: result,
  });
});

// retrieve all books
const getAllBooks = catchAsync(async (req, res) => {
  const result = await bookServices.getAllBooksFromDB()

  if(result.length < 1){
    sendResponse(res, {
      success: false,
      status: StatusCodes.NOT_FOUND,
      message: "No books found",
      data: result,
    });
  }
  
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Books retrieved successfully",
    data: result,
  });
});

// retrieve single book by bookId
const getSingleBook = catchAsync(async (req, res) => {
  const result = await bookServices.getSingleBookFromDB(req.params.bookId)

  if(!result){
    sendResponse(res, {
      success: false,
      status: StatusCodes.NOT_FOUND,
      message: "No book found",
      data: result,
    });
  }
  
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Book retrieved successfully",
    data: result,
  });
});

// update single book by bookId
const updateBook = catchAsync(async (req, res) => {
  const result = await bookServices.updateBookIntoDB(req.params.bookId, req.body)
  
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Book updated successfully",
    data: result,
  });
});

// delete single book by bookId
const deleteBook = catchAsync(async (req, res) => {
  await bookServices.deleteBookFromDB(req.params.bookId)
  
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Book successfully deleted",
  });
});

export const bookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook
};
