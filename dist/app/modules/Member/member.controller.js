"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const sendResponse_1 = require("../../../utils/sendResponse");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const member_service_1 = require("./member.service");
// create a new member
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.createMemberIntoDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Member created successfully",
        data: result,
    });
}));
// retrieve all members
const getAllMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.getAllMembersFromDB();
    if (result.length < 1) {
        (0, sendResponse_1.sendResponse)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: "No members were found",
            data: result,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Members retrieved successfully",
        data: result,
    });
}));
// retrieve single member
const getSingleMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.getSingleMemberFromDB(req.params.memberId);
    if (!result) {
        (0, sendResponse_1.sendResponse)(res, {
            success: false,
            status: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: "The member does not exists",
            data: result,
        });
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Member retrieved successfully",
        data: result,
    });
}));
// update single member by memberId
const updateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.updateMemberIntoDB(req.params.memberId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Member updated successfully",
        data: result,
    });
}));
// delete single member by memberId
const deleteMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.deleteMemberFromDB(req.params.memberId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Member successfully deleted",
    });
}));
exports.memberControllers = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember,
};
