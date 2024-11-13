import { StatusCodes } from "http-status-codes";
import { sendResponse } from "../../../utils/sendResponse";
import catchAsync from "../../../utils/catchAsync";
import { memberServices } from "./member.service";

// create a new member
const createMember = catchAsync(async (req, res) => {
  const result = await memberServices.createMemberIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Member created successfully",
    data: result,
  });
});

// retrieve all members
const getAllMembers = catchAsync(async (req, res) => {
    const result = await memberServices.getAllMembersFromDB()
  
    if(result.length < 1){
        sendResponse(res, {
            success: false,
            status: StatusCodes.NOT_FOUND,
            message: "No members were found",
            data: result,
        });
    }
    
    sendResponse(res, {
      success: true,
      status: StatusCodes.OK,
      message: "Members retrieved successfully",
      data: result,
    });
});

export const memberControllers = {
  createMember,
  getAllMembers,
};
