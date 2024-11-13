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

// retrieve single member
const getSingleMember = catchAsync(async (req, res) => {
    const result = await memberServices.getSingleMemberFromDB(req.params.memberId);
  
    if(!result){
        sendResponse(res, {
            success: false,
            status: StatusCodes.NOT_FOUND,
            message: "The member does not exists",
            data: result,
        });
    }
    
    sendResponse(res, {
      success: true,
      status: StatusCodes.OK,
      message: "Member retrieved successfully",
      data: result,
    });
});


// update single member by memberId
const updateMember = catchAsync(async (req, res) => {
    const result = await memberServices.updateMemberIntoDB(req.params.memberId, req.body)
    
    sendResponse(res, {
      success: true,
      status: StatusCodes.OK,
      message: "Member updated successfully",
      data: result,
    });
});


// delete single member by memberId
const deleteMember = catchAsync(async (req, res) => {
    const result = await memberServices.deleteMemberFromDB(req.params.memberId)
    
    sendResponse(res, {
      success: true,
      status: StatusCodes.OK,
      message: "Member successfully deleted",
    });
});

export const memberControllers = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
